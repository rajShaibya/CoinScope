const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/", async (req, res) => {
  const { amount, risk } = req.body;
  console.log("\n🔵 [POST /api/predict]");
  console.log("🔹 Received inputs:", { amount, risk });

  // Step 0: Validate input
  if (!amount || !risk || isNaN(amount) || isNaN(risk)) {
    console.warn("⚠️ Invalid inputs received");
    return res.status(400).json({ error: "Invalid amount or risk level." });
  }

  try {
    // Step 1: Load metrics
    const METRICS_URL = "https://raw.githubusercontent.com/aryansingh1208/coindata/main/coin_metrics.json";
    console.log("📦 Fetching metrics from:", METRICS_URL);
    const metricsRes = await axios.get(METRICS_URL);
    const metrics = metricsRes.data;
    console.log("✅ Metrics loaded:", metrics.length, "coins");

    const metrics_by_id = {};
    metrics.forEach(c => metrics_by_id[c.id] = c);

    // Step 2: Load forecasts
    const FORECAST_URL = "https://raw.githubusercontent.com/aryansingh1208/crypto-forecast/main/all_forecasts.json";
    console.log("📦 Fetching forecasts from:", FORECAST_URL);
    const forecastRes = await axios.get(FORECAST_URL);
    const forecasts = forecastRes.data;
    console.log("✅ Forecasts loaded:", Object.keys(forecasts).length, "coins");

    // Step 3: Filter candidates by proximity
    const candidates = [];
    for (let cid in metrics_by_id) {
      const m = metrics_by_id[cid];
      const price = m.current_price;
      if (price == null) continue;

      const diff = Math.abs(price - amount);
      candidates.push({
        id: cid,
        name: m.name,
        price,
        diff,
        volatility: m.volatility,
        sharpe: m.sharpe,
      });
    }

    console.log("🔍 Total candidates:", candidates.length);
    const closest5 = candidates.sort((a, b) => a.diff - b.diff).slice(0, 5);
    console.log("🏆 Closest 5 coins:", closest5.map(c => `${c.name} ($${c.price})`));

    const results = closest5.map(entry => ({
      ...entry,
      weekly: forecasts[entry.id]?.weekly || null
    }));

    // Step 4: Rank based on risk
    let ranked = [];

    if (risk <= 3) {
      console.log("⚠️ Risk level: Low");
      ranked = results.sort((a, b) => (b.sharpe || -1) - (a.sharpe || -1));
    } else if (risk <= 7) {
      console.log("⚖️ Risk level: Medium");
      const maxSharpe = Math.max(...results.map(r => r.sharpe || 0)) || 1;
      const maxDiff = Math.max(...results.map(r => r.diff)) || 1;

      results.forEach(r => {
        const shScore = (r.sharpe || 0) / maxSharpe;
        const pxScore = 1 - (r.diff / maxDiff);
        r.score = 0.7 * shScore + 0.3 * pxScore;
      });

      ranked = results.sort((a, b) => b.score - a.score);
    } else {
      console.log("🔥 Risk level: High");
      ranked = results.sort((a, b) => a.diff - b.diff);
    }

    console.log("✅ Final top 3:", ranked.slice(0, 3).map(c => c.name));
    res.json(ranked.slice(0, 3));

  } catch (err) {
    console.error("❌ Prediction failed at:", err.config?.url || "unknown step");
    console.error("📛 Message:", err.message);
    res.status(500).json({ error: "Server error during prediction." });
  }
});

module.exports = router;

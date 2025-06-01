import React, { useRef } from 'react';
import '../styles/popular.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import bitcoin from '../images/bitcoin.png';
import ethereum from '../images/ethereum.png';
import xrp from '../images/xrp.png';
import tether from '../images/tether.png';
import bnb from '../images/bnb.png';
import doge from '../images/dogecoin.jpg';
import { Link } from 'react-router-dom';

const Announcements = () => {
    const slideRef = useRef(null);

    const handleNext = () => {
        const items = slideRef.current.querySelectorAll('.item');
        slideRef.current.appendChild(items[0]);
    };

    const handlePrev = () => {
        const items = slideRef.current.querySelectorAll('.item');
        slideRef.current.prepend(items[items.length - 1]);
    };

    return (
        <div className="contain">
            <div className="container">
                <div className="slide" ref={slideRef}>

                    <div className="item" style={{ backgroundImage: `url(${doge})` }}>
                        <div className="dark"></div>
                        <div className="content">
                            <div className="name">DogeCoin</div>
                            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                            
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: `url(${bitcoin})` }}>
                    <div className="dark"></div>
                        <div className="content">
                            <div className="name">BitCoin</div>
                            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>

                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: `url(${ethereum})` }}>
                    <div className="dark"></div>
                        <div className="content">
                            <div className="name">Ethereum</div>
                            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                            
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: `url(${xrp})` }}>
                    <div className="dark"></div>
                        <div className="content">
                            <div className="name">XRP</div>
                            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                            
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: `url(${tether})`}}>
                    <div className="dark"></div>
                        <div className="content">
                            <div className="name">Tether</div>
                            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                            
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: `url(${bnb})` }}>
                    <div className="dark"></div>
                        <div className="content">
                            <div className="name">BNB</div>
                            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>

                        </div>
                    </div>
                </div>
            

                <div className="button">
                    <button className="prev" onClick={handlePrev}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <button className="next" onClick={handleNext}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Announcements;

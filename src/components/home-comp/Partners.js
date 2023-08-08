import React from "react";
import './Partners.css';
import PartnersCard from "./PartnersCard";

const Partners = () => {
    // const imageUrl = 'partner1.jpg';
    return (
        <div className="partners-con">
            <div className="partners-content">
            <b><p className="partners-head">Our <span style={{ color: '#0E8388' }}>Partners</span></p></b>
            <p>A very big thank you to all our partners for their continued partnership.</p>
            <p>If you’re interested in being showcased throughout , contact connectwithaurapp@gmail.com to discuss sponsorship opportunities.</p>
            <p className="general-partners">General Partners</p>
            <div className="display-partners">
                <PartnersCard/>
            </div>
            <p className="general-partners">Template Creator</p>
            <div className="display-partners">
                <PartnersCard/>
            </div>
            </div>
        </div>
    )
};

export default Partners;
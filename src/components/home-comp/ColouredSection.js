import React from "react";
import './ColouredSection.css';
import { Button } from 'react-bootstrap';

const ColouredSection = () => {

const handleClick = () => {}

    return (
        <div className="containercss">
            <div className="about-text">
                <p className="about-title">About Open Source Weekend</p>
                <p>Google Developer Group Jalandhar is inspired by GTUG/GDG Family. We started our journey in Feb 2011. We try to engage student developers, fresh graduates, and professionals through our hack events & meetups. The motive is to create a local ecosystem of programmers & hackers in and around Jalandhar. Technology awareness is the main goal for the first few years of the group.</p>
                <Button  className="colored-button" onClick={handleClick}>
                    Meetup Page
                </Button>
                <p>See More about App Name</p>
            </div>
        </div>
    )
};

export default ColouredSection;
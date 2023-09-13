import React from "react";
import './EventsPage.css';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";

const EventsPage = (props) => {
    const navigate = useNavigate();
    const handleClick = () => {
        // Redirect to the "/other" route
        navigate('/events');
    };

    return (
        <>
           <Navbar/>
            <div className="events-page">
                <div className="eve-img-con">
                    <div className="eve-img" >
                        <div className="eve-txt-con">
                            <p className="eve-head">DevFest 2021</p>
                            <p className="eve-txt-1">Open Source Weekend</p>
                            <p className="eve-txt-2">2021-10-23</p>
                            
                            </div>
                            </div>
                    </div>
                    <div className="eve-body">
                    <div className="eve-details">
                    <div className="eve-det-tit">
                        <b><p>DevFest 2021 Details</p></b>
                    </div>
                    <div className="eve-det-txt">
                    <p>Much of the web ecosystem focusing on fundamentals and innovating quickly to meet the ever-changing needs of users. To help our community build powerful and useful sites, we want to invite you to web.dev LIVE India, a four-day digital event to learn modern web techniques and to connect with other developers. While we are open to welcome everyone and a digital event means anyone can join, the content will be tailored to India/APAC region audience.</p>
                    </div>
                    <div id="rounded-grey-div-lg">
                        <a className='div-link-eve' href="https://twitter.com/i/flow/login?redirect_after_login=%2Fhashtag%2FWTMJalandhar">#DevFest 2021</a>
                    </div>
                    <div className="eve-det-det">
                        <p><b>Date:</b> 2021-10-23</p>
                        <p><b>Time:</b> 00:30 - 14:30</p>
                        <p><b>Venue:</b> ssdfs</p>
                    </div>
                    <div className="eve-det-btn">
                    <button className="btn btn-primary custom-btn1"><p className="btn-text">REGISTRATION</p></button>
                    <button className="btn btn-secondary custom-btn2 "><p className="btn-text">MEETUP</p></button>
                    <button className="btn btn-success custom-btn3"><p className="btn-text">CALL FOR SPEAKERS</p></button>
                    <button className="btn btn-danger custom-btn4"><p className="btn-text">FACEBOOK</p></button>
                    <button className="btn btn-warning custom-btn5"><p className="btn-text">FEEDBACK</p></button>
                    <button className="btn btn-info custom-btn6"><p className="btn-text">YOUTUBE LIVE</p></button>
                    </div>
                    </div>
                    </div>
                
        </div>
        </>
    );
}

export default EventsPage;

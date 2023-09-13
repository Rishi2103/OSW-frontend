import React from "react";
import './MeetupCard.css';
import { Link } from "react-router-dom";

const MeetupCard = (props) => {
    return (
        <Link to={{ pathname: '/EventsPage', state: { data: props } }} className="card-con">
            <div className="card-text">
                <p className="date">{props.date}</p>
                <p className="event-name">{props.event}</p>
                <p className="mode">{props.mode}</p>
            </div>
            <div className="card-text2">
                <p className="see-more">See More</p>
            </div>
        </Link>
    );
}

export default MeetupCard;

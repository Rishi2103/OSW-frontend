import React from "react";
import './MeetupCard.css'

const MeetupCard = (props) => {
    return(
        <div className="card-con">
            <div className="card-text">
            <p className="date">{props.date}</p>
            <p className="event-name">{props.event}</p>
            <p className="mode">{props.mode}</p>
            <p className="see-more">See More</p>
            </div>
        </div>
    )
}

export default MeetupCard;
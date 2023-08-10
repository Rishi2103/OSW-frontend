import React from "react";
import './Meetup.css';
import MeetupCard from "./MeetupCard";


const Meetup = () => {
    const date = ['Dec 20, 2021','Dec 20, 2021' ,'Oct 23, 2021'];
    const event = ['Aura22', 'asdasda','DevFest 2021'];
    const mode = ['Online','','ssdfs'];
    return(
        <div className="meetup-con">
            <div className="meetup-content">
                <b><p className="meetup-head">Our <span style={{ color: '#0E8388' }}>Feature Event</span> & <span style={{ color: '#0E8388' }}>Meetup</span></p></b>
                <p > Events are listed in reverse chronological order by date.</p>
                <div className="display-card">
                <div className="meet-p1">
                <MeetupCard date={date[0]} event={event[0]} mode={mode[0]}/>
                <MeetupCard date={date[1]} event={event[1]} mode={mode[1]}/>
                </div>
                <div className="meet-p2">
                <MeetupCard date={date[2]} event={event[2]} mode={mode[2]}/></div>
                </div>
            </div>
        </div>
    )
}

export default Meetup;
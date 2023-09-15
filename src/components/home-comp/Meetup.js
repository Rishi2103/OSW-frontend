import React, { useEffect, useState } from "react";
import "./Meetup.css";
import MeetupCard from "./MeetupCard";
import { hostname } from "../../hostname";
// import EventsPage from "../EventsPage";

const Meetup = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${hostname}/events`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setEvents(data.eventsData);
        } else {
          const errorData = await response.json();
          console.error("Failed to fetch events:", errorData);
          // Handle the error or display an error message to the user
        }
      } catch (error) {
        console.error("Error fetching events:", error);
        // Handle the error or display an error message to the user
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []);
  return (
    <div className="meetup-con">
      <div className="meetup-content">
        <b>
          <p className="meetup-head">
            Our <span style={{ color: "#0E8388" }}>Feature Event</span> &{" "}
            <span style={{ color: "#0E8388" }}>Meetup</span>
          </p>
        </b>
        <p> Events are listed in reverse chronological order by date.</p>
        <div className="display-card">
          <div className="meet-p1">
            {events.map((event) => (
              <>
                {event.hosted_by_admin && (
                  <MeetupCard
                    id={event._id}
                    date={event.event_date}
                    event={event.event_name}
                    mode={event.event_type}
                    // Provide other event details as needed
                  />
                )}
              </>
            ))}
            {/* <MeetupCard date={date[0]} event={event[0]} mode={mode[0]}/> */}
            {/* <MeetupCard date={date[1]} event={event[1]} mode={mode[1]}/> */}
          </div>
          {/* <div className="meet-p2">
                <MeetupCard date={date[2]} event={event[2]} mode={mode[2]}/></div> */}
        </div>
      </div>
    </div>
  );
};

export default Meetup;

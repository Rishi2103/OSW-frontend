import React from "react";
import './MeetupCard.css';
import { Link } from "react-router-dom";

const MeetupCard = (props) => {
    console.log(props);
    const convertDate = (date) => {
      const originalDate = new Date(date); // Parse the original date string
      const year = originalDate.getFullYear(); // Get the year
      const month = String(originalDate.getMonth() + 1).padStart(2, "0"); // Get the month (adding 1 because months are zero-based)
      const day = String(originalDate.getDate()).padStart(2, "0"); // Get the day

      const formattedDate = `${year}-${month}-${day}`;
      console.log(formattedDate); // Output: "2023-09-23"
      return formattedDate;
    };
    return (
      <Link
        to={{ pathname: `/event/details/${props.id}`, state: { data: props } }}
        className="card-con"
      >
        <div className="card-text">
          <p className="date">{convertDate(props.date)}</p>
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

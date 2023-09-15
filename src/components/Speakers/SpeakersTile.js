import React from "react";
import "./SpeakersTile.css";
import TruncateText from "../TruncateText";
import Bharat_Agarwal from "../../img/Bharat_Agarwal.jpeg";
import { Link } from "react-router-dom";
import { hostname } from "../../hostname";
export default function SpeakersTile(props) {
  const generateLinkIcon = (link) => {
    // Determine the icon based on the link
    // ... Your existing icon logic
    if (link.includes("twitter")) {
      return <i className="fa fa-brands fa-twitter fa-2xs"></i>;
    } else if (link.includes("linkedin")) {
      return <i className="fa fa-brands fa-linkedin fa-2xs"></i>;
    } else if (link.includes("github")) {
      return <i className="fa fa-brands fa-github fa-2xs"></i>;
    } else if (link.includes("medium")) {
      return <i className="fa fa-brands fa-medium fa-2xs"></i>;
    } else if (link.includes("gmail")) {
      return <i className="fa fa-envelope fa-2xs"></i>;
    } else if (link.includes("youtube")) {
      return <i className="fa fa-brands fa-youtube fa-2xs"></i>;
    } else if (link.includes("instagram")) {
      return <i className="fa fa-brands fa-instagram fa-2xs"></i>;
    } else {
      return <i className="fa fa-brands fa-link mx fa-2xs"></i>;
    }
  };
  return (
    <Link
      to={{
        pathname: `/speaker/details/${props._id}`,
        state: { data: props },
      }}
      className="Team"
    >
      {/* <div className="speakertilespeaker"> */}
      <img className="speakertilespeakerimg" src={props.image} alt="" />
      <TruncateText text={props.speakername} maxChars={20} />
      <TruncateText text={props.university} maxChars={20} />
      <div className="teamlinks">
        <div className="teamlinks">
          {props.links.map((link, index) => (
            <a key={index} className="links" href={link}>
              {generateLinkIcon(link)}
            </a>
          ))}
        </div>
      </div>
      {/* </div> */}
    </Link>
  );
}

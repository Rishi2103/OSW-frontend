import React from "react";
import "./SpeakersTile.css";
import TruncateText from '../TruncateText';
export default function SpeakersTile(props) {
  return (
    <div className="speakertilespeaker">
      <img className="speakertilespeakerimg" src={props.image} alt="" />
      <TruncateText text={props.speakername} maxChars={20} />
      <TruncateText text={props.university} maxChars={20} />
      <div className="teamlinks">
        <div className="teamlinks">
          {props.links.map((link, index) => (
            <a key={index} className="links" href={link}>
              {link.includes("twitter") ? (
                <i className="fa fa-brands fa-twitter fa-2xs"></i>
              ) : link.includes("linkedin") ? (
                <i className="fa fa-brands fa-linkedin fa-2xs"></i>
              ) : link.includes("github") ? (
                <i className="fa fa-brands fa-github fa-2xs"></i>
              ) : link.includes("medium") ? (
                <i className="fa fa-brands fa-medium fa-2xs"></i>
              ) : link.includes("gmail") ? (
                <i className="fa fa-envelope fa-2xs"></i>
              ) : link.includes("youtube") ? (
                <i className="fa fa-brands fa-youtube fa-2xs"></i>
              ) : link.includes("instagram") ? (
                <i className="fa fa-brands fa-instagram fa-2xs"></i>
              ) : (
                // If it doesn't match any of the above, provide a default icon or handle as needed
                <i className="fa fa-brands fa-link mx fa-2xs"></i>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

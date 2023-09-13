import React from "react";
import "./SpeakersTile.css";
import TruncateText from '../TruncateText';
export default function SpeakersTile(props) {
  return (
    <div className="speakertilespeaker">
      <img className="speakertilespeakerimg" src={props.image} alt="" />
      <TruncateText text={props.speakername} maxChars={20} />
      <TruncateText text={props.community} maxChars={20} />
    </div>
  );
}

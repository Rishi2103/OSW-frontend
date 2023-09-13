import React from "react";
import "./TeamTile.css";
import teamProfile from "./TeamProfile";
import TruncateText from '../TruncateText';
export default function teamTile(props) {
  return (
    // <div className="teamTile">
    <div className="Team">
      <img className="teamimg"src={props.img} alt="" />
        <TruncateText text={props.name} maxChars={20} />
        <TruncateText text={props.job} maxChars={20} />
        <div className="teamlinks">
          <a className="links" href={props.twitter}>
            <i className="fa fa-brands fa-twitter fa-2xs"></i>
          </a>
          <a className="links" href={props.linkedin}>
            <i className="fa fa-brands fa-linkedin fa-2xs"></i>
          </a>
          <a className="links" href={props.github}>
            <i className="fa fa-brands fa-github fa-2xs"></i>
          </a>
          <a  className="links" href={props.medium}>
            <i className="fa fa-brands fa-medium fa-2xs"></i>
          </a>
          {/* <a href={props.link}>
            <i className="fa fa-brands fa-link mx fa-2xs"></i>
          </a> */}
        </div>
    </div>
    // </div>
  );
}

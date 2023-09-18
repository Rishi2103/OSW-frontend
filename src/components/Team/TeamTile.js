import React, { useState } from "react";
import "./TeamTile.css";
import TruncateText from "../TruncateText";
import { Link } from "react-router-dom";
export default function TeamTile(props) {
  const [pic, setPic] = useState(null);
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
  fetch(props.img)
    .then((response) => response.blob())
    .then((blob) => {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result;
        console.log(props.img);
        console.log("Data URL:", dataUrl);
        // Use the data URL to display the image or perform other operations
      };
      reader.readAsDataURL(blob);
    })
    .catch((error) => console.error("Error fetching blob:", error));
  return (
    // <div className="teamTile">
    <Link
      to={{
        pathname: `/team-member/details/${props._id}`,
        state: { data: props },
      }}
      className="Team"
    >
      <img className="teamimg" src={pic} alt="" />
      <TruncateText text={props.name} maxChars={20} />
      <TruncateText text={props.job} maxChars={20} />
      <div className="teamlinks">
        <div className="teamlinks">
          {props.links.map((link, index) => (
            <a key={index} className="links" href={link}>
              {generateLinkIcon(link)}
            </a>
          ))}
        </div>
      </div>{" "}
    </Link>
  );
}

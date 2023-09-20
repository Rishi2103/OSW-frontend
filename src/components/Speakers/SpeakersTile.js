import React, { useEffect, useState } from "react";
import "./SpeakersTile.css";
import TruncateText from "../TruncateText";
import Bharat_Agarwal from "../../img/Bharat_Agarwal.jpeg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
export default function SpeakersTile({ speaker, onDelete }) {
  // const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get the JWT token from wherever you have stored it (e.g., localStorage)
    const getUser = async () => {
      if (localStorage.getItem("userAuthToken")) {
        const token = localStorage.getItem("userAuthToken");

        if (token) {
          try {
            // Split the token into its parts
            const tokenParts = token.split(".");

            // Base64-decode and parse the payload part (the second part)
            const payload = JSON.parse(atob(tokenParts[1]));
            console.log(payload.type);
            await setUser(payload); // Set user state with decoded data
          } catch (error) {
            // Handle decoding error (e.g., token is invalid)
            console.error("Error decoding JWT token:", error);
          }
        }
      } else {
        const token = localStorage.getItem("adminAuthToken");
        if (token) {
          try {
            // Split the token into its parts
            const tokenParts = token.split(".");

            // Base64-decode and parse the payload part (the second part)
            const payload = JSON.parse(atob(tokenParts[1]));
            console.log(payload.type);
            await setUser(payload); // Set user state with decoded data
          } catch (error) {
            // Handle decoding error (e.g., token is invalid)
            console.error("Error decoding JWT token:", error);
          }
        }
      }
    };
    getUser();
    // console.log(user.type);
  }, []);
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
    } else if (link.includes("facebook")) {
      return <i className="fa fa-brands fa-facebook fa-2xs"></i>;
    } else {
      return <i className="fa fa-brands fa-link mx fa-2xs"></i>;
    }
  };

  // const handleDeleteButtonClick = (event) => {
  //   if (isDeleteEnabled) {
  //     console.log(isDeleteEnabled);
  //     event.preventDefault(); // Prevent the default behavior (navigation)
  //     handleDelete(speaker._id); // Call your delete function here
  //   }
  // };
  return (
    <Link
      to={{
        pathname: `/speaker/details/${speaker._id}`,
        state: { data: speaker },
      }}
      className="Team"
    >
      {user && user.type === "admin" && (
        <button className="deletespeaker-icon" onClick={onDelete}>
          <FontAwesomeIcon
            icon={faTrashAlt}
            // className="delete-icon"
          />
        </button>
      )}
      {/* <div className="speakertilespeaker"> */}
      <img
        className="speakertilespeakerimg"
        src={speaker.pic || Bharat_Agarwal}
        alt=""
      />
      <TruncateText text={speaker.name} maxChars={20} />
      <TruncateText text={speaker.university} maxChars={20} />
      <div className="teamlinks">
        <div className="teamlinks">
          {speaker.social_links.map((link, index) => (
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

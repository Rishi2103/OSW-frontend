import React, { useEffect, useState } from "react";
import Bharat_Agarwal from "../../img/Bharat_Agarwal.jpeg";
import "./SpeakersProfile.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { hostname } from "../../hostname";
export default function SpeakersProfile(props) {
  const [speakerDetails, setSpeakerDetails] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchMemberDetails = async () => {
      try {
        const response = await fetch(`${hostname}/speaker/all-details/${id}`);
        const data = await response.json();
        if (data.success) {
          console.log(data.data);
          setSpeakerDetails(data.data);
        } else {
          console.error("Failed to fetch member details:", data.message);
        }
      } catch (error) {
        console.error("Error fetching member details:", error);
      } finally {
        // Set loading to false regardless of success or failure
        setLoading(false);
      }
    };

    fetchMemberDetails();
  }, [id]);

  if (loading) {
    // While loading, you can show a loading indicator or message
    return <div>Loading...</div>;
  }
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
    <div className="speakerspPage">
      <div className="SpeakersProfile">
        <div className="bio">
          <div className="biobackgroundimg">
            <div className="avatar">
              <img src={Bharat_Agarwal} alt="" />
            </div>
          </div>
          <div className="info">
            <div className="infotext">
              <p className="name">{speakerDetails.name}</p>
              <br />
              <p className="job">{speakerDetails.post} </p>
              <br />
              <p className="community">{speakerDetails.university}</p>
              <h1> </h1>
              <p className="address">
                {speakerDetails.location.city} , {speakerDetails.location.state}{" "}
                {speakerDetails.pincode}
              </p>
            </div>
            <div className="links">
              {speakerDetails.social_links.map((link, index) => (
                <a key={index} className="" href={link}>
                  {generateLinkIcon(link)}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="aboutspeaker">
          <h5 className="aboutspeakertitle">About</h5>
          <span>{speakerDetails.about}</span>
        </div>
      </div>
      <div className="sessions">
        <p className="title">Sessions</p>
        <div className="sessionbodymain">
          {speakerDetails.sessions.map((session, index) => (
            <Link
              to={{
                pathname: `/event/details/${session._id}`,
              }}
            >
              <div key={index} className="sessionbody">
                <span className="sessionAvatar">
                  {session.event_name.charAt(0)}
                </span>
                <span className="sessionname">{session.event_name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

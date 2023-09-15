import React, { useState, useEffect } from "react";
import "./Speakers/Speakers.css";
import SpeakersTile from "./Speakers/SpeakersTile";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { hostname } from "../hostname";

const Speakers = () => {
  const [speakers, setSpeakers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const response = await fetch(`${hostname}/all-speaker`);
        if (response.ok) {
          const data = await response.json();
          console.log(data.speakers);
          setSpeakers(data.speakers);
        } else {
          console.error("Failed to fetch speakers");
        }
      } catch (error) {
        console.error("Error fetching speakers:", error);
      }
    };

    fetchSpeakers();
  }, []);

  return (
    <>
      <Navbar />
      <div className="speakers">
        <div className="speakersheader">
          <span className="speakerstext" style={{ color: "#0E8388" }}>
            Our
          </span>{" "}
          Speakers
        </div>
        <div className="SpeakersTile">
          {speakers.map((speaker) => (
            <SpeakersTile
              _id={speaker._id}
              speakername={speaker.name}
              university={speaker.university}
              image={speaker.pic} // Assuming pic is the image URL
              links={speaker.social_links}
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Speakers;

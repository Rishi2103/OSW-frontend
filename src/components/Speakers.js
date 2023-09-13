import React from "react";
import "./Speakers/Speakers.css";
import SpeakersTile from "./Speakers/SpeakersTile";
import Bharat from "../img/Bharat_Agarwal.jpeg";
// import Speaker2 from "../images/Speakers/speaker2.jpg";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Speakers = () => {
    const speakername = ["Bharat Agarwal", "Kartik Derasari"];
    const community = ["GDG Jalandhar", "DSC Silver Oak University"];
    const image = [Bharat,Bharat ];
    return (
        <>
        <Navbar/>
      <div className="speakers">
        <div className="speakersheader">
          <span className="speakerstext" style={{color: '#0E8388'}}>Our</span> Speakers
        </div>
          <div className="SpeakersTile">
            <SpeakersTile
              className="Bharat"
              speakername={speakername[0]}  
              community={community[0]}
              image={image[0]}
            />
            <SpeakersTile
              className="Kartik"
              speakername={speakername[1]}
              community={community[1]}
              image={image[1]}
            />
            <SpeakersTile
              className="Kartik"
              speakername={speakername[1]}
              community={community[1]}
              image={image[1]}
            />
            <SpeakersTile
              className="Kartik"
              speakername={speakername[1]}
              community={community[1]}
              image={image[1]}
            />
            <SpeakersTile
              className="Kartik"
              speakername={speakername[1]}
              community={community[1]}
              image={image[1]}
            />
            <SpeakersTile
              className="Kartik"
              speakername={speakername[1]}
              community={community[1]}
              image={image[1]}
            />
          </div>
        {<Footer />}
      </div>
      </>
    );
}

export default Speakers;
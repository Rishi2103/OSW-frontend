import React from "react";
import "./home.css";
import Intro from "./home-comp/Intro";
import WhatWeDo from "./home-comp/WhatWeDo";
import ColouredSection from "./home-comp/ColouredSection";
import Meetup from "./home-comp/Meetup";
import Partners from "./home-comp/Partners";


const Home = () => {
  return (
      <div className="max-div">
        <Intro />
        <WhatWeDo />      
        <ColouredSection />
        <Meetup/>
        <Partners/>
        </div>
  );
};

export default Home;

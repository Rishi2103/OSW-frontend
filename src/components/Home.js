import React from "react";
import "./home.css";
import Intro from "./home-comp/Intro";
import WhatWeDo from "./home-comp/WhatWeDo";
import ColouredSection from "./home-comp/ColouredSection";
import Meetup from "./home-comp/Meetup";
import Partners from "./home-comp/Partners";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SecFooter from "./SecFooter";
import ModalForm from "./ModalForm";


const Home = () => {
  return (
    
      <div className="max-div">
        <Navbar/>
        <Intro />
        <WhatWeDo />      
        <ColouredSection />
        <Meetup/>
        <Partners/>
        <Footer/>
        <SecFooter/>
        </div>
  );
};

export default Home;

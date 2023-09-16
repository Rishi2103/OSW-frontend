import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Contact.css";
import sideImg from "../img/contact.svg";
// import { Tooltip, IconButton } from "@mui/material";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
import SecFooter from "./SecFooter";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="side1 side">
          <h1 id="head">Contact Us</h1>
          <p id="disc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos ullam quod magnam necessitatibus minus, atque placeat
            doloribus, nisi officiis reprehenderit natus ut, enim ad commodi?
            Doloribus vel reiciendis fuga inventore doloremque non nostrum quo
            velit porro voluptatum, fugit accusantium ex vitae, dolor, sequi rem
            hic ipsa maxime molestiae explicabo minima! Error et iure doloribus
            sint dolor id ullam quaerat voluptatem adipisci corporis repellendus
            aut hic veritatis, tempore, ipsa numquam ratione quod quas similique
            possimus ipsum sapiente! Veniam eum, rem officiis ex, explicabo
            corrupti expedita temporibus placeat et optio incidunt pariatur
            quibusdam. Perferendis sit dolores odit sequi, eum pariatur. Ipsa,
            facere.
          </p>
          <p>
            Questions? Please contact{" "}
            <a href="mailto:connectwithaurapp@gmail.com">
              connectwithaurapp@gmail.com
            </a>
          </p>
          <br></br>
          <p>
            Follow Us:
            <a href="https://www.facebook.com/">
              <i
                className=" fa fa-brands fa-facebook-f fa-sm mx-3"
                style={{ color: "#7d7d7d" }}
              ></i>
            </a>
            <a href="https://twitter.com/gdgjalandhar">
              <i
                className="fa fa-brands fa-twitter fa-lg"
                style={{ color: "#7d7d7d" }}
              ></i>
            </a>
            <a href="https://instagra.com">
              <i
                className="fa fa-brands fa-instagram fa-lg mx-3"
                style={{ color: "#7d7d7d" }}
              ></i>
            </a>
            <a href="https://github.com/gdg-jalandhar">
              <i
                className="fa fa-brands fa-github fa-lg"
                style={{ color: "#7d7d7d" }}
              ></i>
            </a>
            <a href="https://www.linkedin.com/company/18048778">
              <i
                className="fa fa-brands fa-linkedin fa-lg mx-3"
                style={{ color: "#7d7d7d" }}
              ></i>
            </a>
            <a href="https://youtube.com">
              <i
                className="fa fa-brands fa-youtube fa-lg"
                style={{ color: "#7d7d7d" }}
              ></i>
            </a>
            <a href="https://medium.com">
              <i
                className="fa fa-brands fa-medium fa-lg mx-3"
                style={{ color: "#7d7d7d" }}
              ></i>
            </a>
          </p>
          <br></br>
          <button type="button" className="hash btn btn-secondary">
            #Aura
          </button>
          <button type="button" className="hash btn btn-secondary">
            #OWS
          </button>
          <button type="button" className="hash btn btn-secondary">
            #OpenSourceWeekend
          </button>
        </div>
        <div className="side2 side">
          <img className="sideImg" src={sideImg} alt="sideimg"></img>
        </div>
      </div>
      <SecFooter />
      <Footer />
    </>
  );
}

export default Contact;

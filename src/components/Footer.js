import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <footer>
      <div className="footer-con">
        <div className="follow">
          <span>
            <p className="footer-head">Follow Us:
            <a href="https://www.facebook.com/" target="_blank">
              <i
                className=" fa fa-brands fa-facebook-f fa-sm mx-3"
                style={{ color: "#7d7d7d" }}
              ></i>
            </a>
            <a href="https://twitter.com/gdgjalandhar" target="_blank">
              <i
                className="fa fa-brands fa-twitter fa-lg"
                style={{ color: "#7d7d7d" }}
              ></i>
            </a>
            <a href="https://instagra.com" target="_blank">
              <i
                className="fa fa-brands fa-instagram fa-lg mx-3"
                style={{ color: "#7d7d7d" }}
              ></i>
            </a>
            <a href="https://github.com/gdg-jalandhar" target="_blank">
              <i
                className="fa fa-brands fa-github fa-lg"
                style={{ color: "#7d7d7d" }}
              ></i>
            </a>
            <a href="https://www.linkedin.com/company/18048778" target="_blank">
              <i
                className="fa fa-brands fa-linkedin fa-lg mx-3"
                style={{ color: "#7d7d7d" }}
              ></i>
            </a>
            <a href="https://youtube.com" target="_blank">
              <i
                className="fa fa-brands fa-youtube fa-lg"
                style={{ color: "#7d7d7d" }}
              ></i>
            </a>
            <a href="https://medium.com" target="_blank">
              <i
                className="fa fa-brands fa-medium fa-lg mx-3"
                style={{ color: "#7d7d7d" }}
              ></i>
            </a>
            </p>
          </span>
        </div>
       </div>
       <div className="footer1 ">
        <div className="pair-1">
        <div className="about">
          <span className="aboutHeading">About</span>
          <span className="aboutText">
            <p>
              <a href="dsfdssdfsdf">GDG Jalandhar </a> <br />
              <a href="adfs">WomenTechmakers</a> <br />
              <a href="https://developers.google.com/programs/community/gdg/">
                Google Developers Groups
              </a>
            </p>
          </span>
         </div>
         <div className="resources">
          <span className="resourcesHeading">Resources</span>
          <span className="resourcesText">
            <p>
              <a href="/">Become a Sponsor </a> <br />
              <a href="/">Some Link Name</a>
            </p>
          </span>
         </div>
         </div>
  
          <div className="pair-2">
            
            <div className="developerConsole">
          <span className="developerConsoleHeading">Open Source Weekend</span>
          <span className="developerConsoleText">
            <p>
              <a href="/">Code of Conduct </a> <br />
              <a href="/">Terms and Services</a> <br />
              <a href="/">Community Guidelines</a>
            </p>
          </span>
          </div>
     
          </div>
      </div>
    </footer>
  );
}

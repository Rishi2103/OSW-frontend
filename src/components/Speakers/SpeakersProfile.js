import React from "react";
import Bharat_Agarwal from "../../images/Speakers/Bharat_Agarwal.jpeg";
import "./SpeakersProfile.css";
export default function SpeakersProfile(props) {
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
              <p className="name">Bharat Agarwal </p>
              <p className="job">Developer </p>
              <p className="community">GDG Jalandhar </p>
              <p className="address">Chandigarh , India</p>
            </div>
            <div className="links">
              <a href="https://twitter.com/bharatagsrwal" target="_blank">
                <i className="fa fa-brands fa-twitter fa-sm"></i>
              </a>
              <a href="https://linkedin.com/in/bharatagsrwal" target="_blank">
                <i className="fa fa-brands fa-linkedin fa-sm"></i>
              </a>
              <a href="https://github.com/bharatagsrwal" target="_blank">
                <i className="fa fa-brands fa-github fa-sm"></i>
              </a>
              <a href="https://medium.com/@agarwalbharat68/" target="_blank">
                <i className="fa fa-brands fa-medium fa-sm"></i>
              </a>
              <a href="https://iambharat.me" target="_blank">
                <i className="fa fa-link"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="aboutspeaker">
          <h5 className="aboutspeakertitle">About</h5>
          <span>
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio."
          </span>
        </div>
      </div>
      <div className="sessions">
        <p className="title">Sessions</p>
        <div className="sessionbodymain">
          <div className="sessionbody">
            <span className="sessionAvatar">A</span>
            <span className="sessionname">Aura22</span>
          </div>
          <div className="sessionbody">
            <span className="sessionAvatar">D</span>
            <span className="sessionname">DevFest 2021</span>
          </div>
          <div className="sessionbody">
            <span className="sessionAvatar">D</span>
            <span className="sessionname">DevFest 2021</span>
          </div>
        </div>
      </div>
    </div>
  );
}

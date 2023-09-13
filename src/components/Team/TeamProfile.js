import React from "react";
import Bharat_Agarwal from "../../img/Bharat_Agarwal.jpeg";
import "./TeamProfile.css";
export default function teamProfile(props) {
  return (
    <div className="teamProfilepage">
      <div className="back">
        <span className="arrow">
          <button>
            <i
              class="fa fa-solid fa-arrow-left"
              style={{ color: "#000000" }}
            ></i>
            Team
          </button>
        </span>
      </div>
      <div className="profile">
        <div className="memberPhotoAndOtherInfo">
          <img src={Bharat_Agarwal} alt="" className="memberPhoto" />
          <p className="memberInfoName">Bharat Agarwal</p>
          <p className="memberInfoJob">Developer</p>
          <p className="mamberInfoWhichTeam">Core Team</p>
          <p className="memberinfostatus">Active</p>
        </div>
        <div className="memberInfo">
          <p className="memberInfoHeading">Bio</p>
          <p className="memberInfoMessage">Hey, I am Bharat Agarwal</p>
          <span className="memberInfoHeading">
            <p>Social Links</p>
            <div className="teamprofilesociallink">
              <a
                className="memberTwitterLink"
                href="https://twitter.com/bharatagsrwal"
              >
                TWITTER
              </a>
              <a
                className="memberLinkedinlLink"
                href="https://linkedin.com/in/bharatagsrwal"
              >
                LINKEDIN
              </a>
              <a className="memberWebLink" href="https://iambharat.me">
                WEB
              </a>
              <a
                className="memberGithubLink"
                href="https://github.com/bharatagsrwal"
              >
                GITHUB
              </a>
              <a
                className="memberMediumLink"
                href="https://medium.com/@agarwalbharat68/"
              >
                MEDIUM
              </a>
              <a
                className="memberFacebookLink"
                href="https://facebook.com/bharatagsrwal"
              >
                FACEBOOK
              </a>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

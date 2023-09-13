import React from "react";
import "./Team/Team.css";
import TeamTile from "./Team/TeamTile";
import Bharat from "../img/Bharat_Agarwal.jpeg";
import Vrijraj from "../img/Vrijraj Singh.png";
import toolbar from "../img/toolbar.png";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Team = () => {
    const name = ["Bharat Agrawal", "Vrijraj Singh"];
  const job = ["Developer", "Developer"];
  const twitter = ["https://twitter.com/bharatagsrwal"];
  const linkedin = [
    "https://linkedin.com/in/bharatagsrwal",
    "https://linkedin.com",
  ];
  const github = ["https://medium.com/@agarwalbharat68/", "https://github.com"];
  const medium = ["https://medium.com/@agarwalbharat68/", "https://medium.com"];
  const link = ["https://iambharat.me"];
  const img = [Bharat, Vrijraj];
  return (
    <>
    <Navbar/>
    <div className="team">
      <div className="teamheader">
        <div className="teamheadertitle">
          <span className="our" style={{color: '#0E8388'}}>Our</span> Team
        </div>
        <div className="headertext">
          <p>
            Google is known all around the world. Everyone is 'googling',
            checking on 'maps' and communicating in 'gmail'. For simple users,
            they are services that just works, but not for us. Developers see
            much more: APIs, scalability issues, complex technology stacks. And
            that is what GDG is about.
          </p>
          <p>
            Our goal is to organize space to connect the best industry experts
            with Indian audience to boost development of IT. And Our Core Team
            is:
          </p>
        </div>
      </div>
      <div className="TeamTile">
        <TeamTile
          name={name[0]}
          job={job[0]}
          img={img[0]}
          twitter={twitter[0]}
          linkedin={linkedin[0]}
          github={github[0]}
          medium={medium[0]}
          link={link[0]}
        />
        <TeamTile
          name={name[1]}
          job={job[1]}
          img={img[1]}
          linkedin={linkedin[1]}
          github={github[1]}
          medium={medium[1]}
        />
        <TeamTile
          name={name[1]}
          job={job[1]}
          img={img[1]}
          linkedin={linkedin[1]}
          github={github[1]}
          medium={medium[1]}
        />
        <TeamTile
          name={name[1]}
          job={job[1]}
          img={img[1]}
          linkedin={linkedin[1]}
          github={github[1]}
          medium={medium[1]}
        />
        <TeamTile
          name={name[1]}
          job={job[1]}
          img={img[1]}
          linkedin={linkedin[1]}
          github={github[1]}
          medium={medium[1]}
        />
        <TeamTile
          name={name[1]}
          job={job[1]}
          img={img[1]}
          linkedin={linkedin[1]}
          github={github[1]}
          medium={medium[1]}
        />
        <TeamTile
          name={name[1]}
          job={job[1]}
          img={img[1]}
          linkedin={linkedin[1]}
          github={github[1]}
          medium={medium[1]}
        />
        <TeamTile
          name={name[1]}
          job={job[1]}
          img={img[1]}
          linkedin={linkedin[1]}
          github={github[1]}
          medium={medium[1]}
        />
        <TeamTile
          name={name[1]}
          job={job[1]}
          img={img[1]}
          linkedin={linkedin[1]}
          github={github[1]}
          medium={medium[1]}
        />
      </div>
      <div className="orgTeamMem">
        <h4>Organizing Team Members</h4>
        <button className="orgTeamMembutton">
          <div className="orgTeamMemImg">
            <img src={toolbar} alt="" />
          </div>
          <div className="orgTeamMemInfo">
            <span>
              <p>Aura</p>
              <p>Aura Admin</p>
            </span>
            <a className="links" href="">
              <i className="fa fa-brands fa-twitter fa-2xs"></i>
            </a>
            <a className="links" href="">
              <i className="fa fa-brands fa-github fa-2xs"></i>
            </a>
            <a className="links" href="">
              <i className="fa fa-brands fa-medium fa-2xs"></i>
            </a>
          </div>
        </button>
      </div>
      <Footer />
    </div>
    </>
  );
}

export default Team;
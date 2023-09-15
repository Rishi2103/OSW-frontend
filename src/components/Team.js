import React, { useEffect, useState } from "react";
import "./Team/Team.css";
import TeamTile from "./Team/TeamTile";
import Bharat from "../img/Bharat_Agarwal.jpeg";
import Vrijraj from "../img/Vrijraj Singh.png";
import toolbar from "../img/toolbar.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { hostname } from "../hostname";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch(`${hostname}/all-team-members`);
        if (!response.ok) {
          throw new Error("Failed to fetch team members");
        }
        const data = await response.json();
        console.log(data.teams);
        setTeamMembers(data.teams);
      } catch (error) {
        console.error("Error fetching team members:", error.message);
      }
    };

    fetchTeamMembers();
  }, []);
  return (
    <>
      <Navbar />
      <div className="team">
        <div className="teamheader">
          <div className="teamheadertitle">
            <span className="our" style={{ color: "#0E8388" }}>
              Our
            </span>{" "}
            Team
          </div>
          <div className="headertext">
            <p>
              Google is known all around the world. Everyone is 'googling',
              checking on 'maps' and communicating in 'gmail'. For simple users,
              they are services that just works, but not for us. Developers see
              much more: APIs, scalability issues, complex technology stacks.
              And that is what GDG is about.
            </p>
            <p>
              Our goal is to organize space to connect the best industry experts
              with Indian audience to boost development of IT. And Our Core Team
              is:
            </p>
          </div>
        </div>
        <div className="TeamTile">
          {teamMembers.map((member, index) => (
            <TeamTile
              _id={member._id}
              name={member.name}
              job={member.post}
              img={member.pic} // Assuming pic is the image URL
              links={member.social_links}
              // ... Other props
            />
          ))}
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
};

export default Team;

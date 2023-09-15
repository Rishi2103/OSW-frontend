import React, { useEffect, useState } from "react";
import Bharat_Agarwal from "../../img/Bharat_Agarwal.jpeg";
import "./TeamProfile.css";
import { useNavigate, useParams } from "react-router-dom";
import { hostname } from "../../hostname";
export default function TeamProfile(props) {
  const [memberDetails, setMemberDetails] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true); // Add loading state
  const navigate = useNavigate();
  useEffect(() => {
    const fetchMemberDetails = async () => {
      try {
        const response = await fetch(
          `${hostname}/team-member/all-details/${id}`
        );
        const data = await response.json();
        if (data.success) {
          setMemberDetails(data.data);
        } else {
          console.error("Failed to fetch member details:", data.message);
        }
      } catch (error) {
        console.error("Error fetching member details:", error);
      } finally {
        // Set loading to false regardless of success or failure
        setLoading(false);
      }
    };

    fetchMemberDetails();
  }, [id]);

  if (loading) {
    // While loading, you can show a loading indicator or message
    return <div>Loading...</div>;
  }
  const generateLinkIcon = (link) => {
    if (link.includes("twitter")) {
      return "Twitter";
    } else if (link.includes("linkedin")) {
      return "LinkedIn";
    } else if (link.includes("github")) {
      return "GitHub";
    } else if (link.includes("medium")) {
      return "Medium";
    } else if (link.includes("gmail")) {
      return "Gmail";
    } else if (link.includes("youtube")) {
      return "YouTube";
    } else if (link.includes("instagram")) {
      return "Instagram";
    } else {
      return "Link";
    }
  };
  function goback(){
    navigate("/team")
  }

  return (
    <div className="teamProfilepage">
      <div className="back">
        <span className="arrow">
          <button
            onClick={goback}
          >
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
          <img src={memberDetails.pic} alt="" className="memberPhoto" />
          <p className="memberInfoName">{memberDetails.name}</p>
          <p className="memberInfoJob">{memberDetails.post}</p>
          <p className="mamberInfoWhichTeam">{memberDetails.team}</p>
        </div>
        <div className="memberInfo">
          <p className="memberInfoHeading">Bio</p>
          <p className="memberInfoMessage">{memberDetails.bio}</p>
          <br/>
          <span className="memberInfoHeading">
            <p>Social Links</p>
            {/* <br /> */}
            <br />
            <div className="teamprofilesociallink">
              {memberDetails.social_links.map((link, index) => (
                <a key={index} className="links" href={link}>
                  {generateLinkIcon(link)}
                </a>
              ))}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

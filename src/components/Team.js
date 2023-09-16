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

  const exampleModal = document.getElementById("exampleModal");
  useEffect(() => {
    const exampleModal = document.getElementById("exampleModal");
    if (exampleModal) {
      exampleModal.addEventListener("show.bs.modal", (event) => {
        // Your event handling code here
      });
    }
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    post: "",
    sociallinks: [],
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === "file" ? files[0] : value;
    setFormData({ ...formData, [name]: newValue });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log(formData);
  };
  const [textInputs, setTextInputs] = useState([""]);

  const handleTextInputChange = (index, event) => {
    const updatedInputs = [...textInputs];
    updatedInputs[index] = event.target.value;
    setTextInputs(updatedInputs);
  };

  const removeTextInput = (index) => {
    if (textInputs.length > 1) {
      const updatedInputs = [...textInputs];
      updatedInputs.splice(index, 1);
      setTextInputs(updatedInputs);
    }
  };

  const addTextInput = () => {
    setTextInputs([...textInputs, ""]);
  };
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
              <a className="links" href="www.twitter.com">
                <i className="fa fa-brands fa-twitter fa-2xs"></i>
              </a>
              <a className="links" href="www.github.com">
                <i className="fa fa-brands fa-github fa-2xs"></i>
              </a>
              <a className="links" href="www.medium.com">
                <i className="fa fa-brands fa-medium fa-2xs"></i>
              </a>
            </div>
          </button>
        </div>
        <div className="registeryourself">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Register you Self
          </button>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Team Member Registration
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <label htmlFor="profilephoto">Profile Photo</label>
                  <br />
                  <input
                    type="file"
                    name="profilephoto"
                    id="profilephoto"
                    accept="image/*"
                    onChange={handleChange}
                  />
                  <div className="d-flex">
                    <div className="mb-3 p-2 flex-fill">
                      <label
                        htmlFor="teammember-name"
                        className="col-form-label"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="teammember-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3 p-2 flex-fill">
                      <label
                        htmlFor="teammember-post"
                        className="col-form-label"
                      >
                        Post
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="teammember-post"
                        name="post"
                        value={formData.post}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="teammember-bio" className="col-form-label">
                      Bio
                    </label>
                    <textarea
                      className="form-control"
                      id="teammember-bio"
                      name="bio"
                      value={formData.about}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="teammember-sociallinks"
                      className="col-form-label"
                    >
                      Social Links
                    </label>
                    {textInputs.map((textInput, index) => (
                      <div className="minus" key={index}>
                        <div className="teammember-sociallinksInput">
                          <input
                            type="text"
                            name="textInputs"
                            className="form-control"
                            value={textInput}
                            onChange={(event) =>
                              handleTextInputChange(index, event)
                            }
                          />
                        </div>
                        <button
                          type="button"
                          className="ms-3 btn btn-primary"
                          style={{ backgroundColor: "#0E8388" }}
                          onClick={() => removeTextInput(index)}
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      className="btn btn-primary"
                      style={{ backgroundColor: "#0E8388" }}
                      onClick={addTextInput}
                    >
                      Add Social Links
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Team;

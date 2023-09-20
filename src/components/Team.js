import React, { useEffect, useState } from "react";
import "./Team/Team.css";
import TeamTile from "./Team/TeamTile";
// import Bharat from "../img/Bharat_Agarwal.jpeg";
// import Vrijraj from "../img/Vrijraj Singh.png";
import toolbar from "../img/toolbar.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { hostname } from "../hostname";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [user, setUser] = useState(null);
  const isDeleteEnabled = true;

  useEffect(() => {
    // Get the JWT token from wherever you have stored it (e.g., localStorage)
    const getUser = async () => {
      if (localStorage.getItem("userAuthToken")) {
        const token = localStorage.getItem("userAuthToken");

        if (token) {
          try {
            // Split the token into its parts
            const tokenParts = token.split(".");

            // Base64-decode and parse the payload part (the second part)
            const payload = JSON.parse(atob(tokenParts[1]));
            console.log(payload.type);
            await setUser(payload); // Set user state with decoded data
          } catch (error) {
            // Handle decoding error (e.g., token is invalid)
            console.error("Error decoding JWT token:", error);
          }
        }
      } else {
        const token = localStorage.getItem("adminAuthToken");
        if (token) {
          try {
            // Split the token into its parts
            const tokenParts = token.split(".");

            // Base64-decode and parse the payload part (the second part)
            const payload = JSON.parse(atob(tokenParts[1]));
            console.log(payload.type);
            await setUser(payload); // Set user state with decoded data
          } catch (error) {
            // Handle decoding error (e.g., token is invalid)
            console.error("Error decoding JWT token:", error);
          }
        }
      }
    };
    getUser();
    // console.log(user.type);
  }, []);
  const [team, setteam] = useState({
    team: "",
    name: "",
    post: "",
    bio: "",
    social_links: [],
    teamprofilephoto: null,
  });
  const [nameError, setnameError] = useState("");
  const [postError, setpostError] = useState("");
  const [teamError, setteamError] = useState("");
  const [bioError, setbioError] = useState("");
  const [social_linksError, setsocial_linksError] = useState("");
  const [selectedteamprofilephoto, setSelectedteamprofilephoto] =
    useState(null);
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
  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const handleChange = (e) => {
    const { name, type, files } = e.target;
    if (type === "file") {
      const teamprofilephoto = files[0];
      // Create a temporary URL for the selected image
      const imageUrl = URL.createObjectURL(files[0]);
      setSelectedteamprofilephoto(imageUrl); // Store the URL in state
      setteam({ ...team, [name]: teamprofilephoto });
    }
  };
  const [textInputs, setTextInputs] = useState([""]);

  const handleTextInputChange = (identifier, event) => {
    // Ensure that the event object is properly passed
    if (event && event.target) {
      // Create a copy of the speaker object
      const updatedteam = { ...team };

      // Update the corresponding field based on the identifier
      if (identifier === "teamname") {
        updatedteam.name = event.target.value;
        setnameError("");
      } else if (identifier === "teampost") {
        updatedteam.post = event.target.value;
        setpostError("");
      } else if (identifier === "teambio") {
        updatedteam.bio = event.target.value;
        setbioError("");
      } else if (identifier === "team") {
        updatedteam.team = event.target.value;
        setteamError("");
      }
      console.log(updatedteam);

      // Update the state with the modified speaker object
      setteam(updatedteam);
    }
  };
  const handlelinksInputChange = (event, index) => {
    const updatedSocialLinks = [...team.social_links];
    updatedSocialLinks[index] = event.target.value;
    setteam({
      ...team,
      social_links: updatedSocialLinks,
    });
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
    setteam((prevTeam) => ({
      ...prevTeam,
      sociallinks: [...prevTeam.social_links, ""],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !team.name ||
      !team.post ||
      !team.bio ||
      !team.team ||
      team.social_links.length === 0
    ) {
      // Set error messages for the respective input fields
      if (!team.name) {
        setnameError(" Name is required.");
      }
      if (!team.post) {
        setpostError("Post is required.");
      }
      if (!team.bio) {
        setbioError("Bio are required.");
      }
      if (!team.team) {
        setteamError("Team are required.");
      }
      if (!team.sociallinksofteam) {
        setsocial_linksError("Social Links are required.");
      }
      // Prevent form submission
      return;
    }
    // Assuming you have the necessary data (name, bio, post, social_links, and a file) in variables
    const ProfilePicFile = new File([selectedteamprofilephoto], "team_pic.jpg");
    console.log(ProfilePicFile);
    const formData = new FormData();
    formData.append("name", team.name);
    formData.append("bio", team.bio);
    formData.append("post", team.post);
    team.social_links.forEach((link) => {
      formData.append("social_links", link);
    });
    formData.append("team", team.team); // Replace with the appropriate team value
    formData.append("file", ProfilePicFile);
    // formData.append("teamprofilephoto", file); // Replace 'file' with your file input reference
    // console.log(localStorage.getItem("adminAuthToken"));
    fetch(`${hostname}/admin/add-teammember`, {
      method: "POST",
      headers: {
        authorization: localStorage.getItem("adminAuthToken"), // Replace with your access token if needed
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Team member added successfully, you can handle the response data here
          console.log("Team member added successfully:", data.team_member);
          setteam({
            name: "",
            post: "",
            bio: "",
            team: "",
            social_links: [],
          });

          // Close the modal (if you want)
          fetchTeamMembers();

          // Add code to close the modal here if needed
          toast("Successfully Submited!", {
            position: "top-right",
            backgroundColor: "#0E8388",
          });
        } else {
          // Error occurred while adding a team member, handle the error message
          console.error("Error adding team member:", data.message);
          toast("Error Occured!", {
            position: "top-right",
            backgroundColor: "#0E8388",
          });
        }
      })
      .catch((error) => {
        // Handle any network or other errors
        console.error("Error:", error);
        toast("Error Occured!", {
          position: "top-right",
          backgroundColor: "#0E8388",
        });
      });
  };

  const handleDelete = async (event, Id) => {
    // Make an HTTP DELETE request to delete the event
    if (isDeleteEnabled) {
      console.log(isDeleteEnabled);
      event.preventDefault();
      try {
        const response = await fetch(`${hostname}/delete/team-member/${Id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: localStorage.getItem("adminAuthToken"),
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("Speaker deleted successfully:", data);
        fetchTeamMembers();
        // Navigate to the "/speakers" route
      } catch (error) {
        console.error("Error deleting speaker:", error);
      }
    }
  };
  return (
    <>
      <div className="team">
        <Navbar />
        <div className="teamheader">
          <div className="teamheadertitle">
            <span className="our">Our</span> Team
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
        {user && user.type === "admin" && (
          <div
            className="addteammember"
            style={{ marginLeft: "10vw", marginTop: "3vw" }}
          >
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add Team Member
            </button>
          </div>
        )}

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-lg"
            style={{
              marginLeft: "30vw",
              maxWidth: "150%",
              marginRight: "-90vw",
            }}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Add Member
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
                  <div class="mb-3">
                    <label for="formFile" className="form-label">
                      Profile Photo
                    </label>
                    {selectedteamprofilephoto && (
                      <img
                        className="teamprofilephoto"
                        src={selectedteamprofilephoto}
                        alt="Selected_Profile_Photo"
                      />
                    )}
                    <input
                      className="form-control"
                      name="teamprofilephoto"
                      type="file"
                      id="formFile"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="d-flex">
                    <div className="mb-3 p-2 flex-fill">
                      <label htmlFor="name" className="col-form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control border border-2 shadow-sm bg-body-tertiary rounded"
                        id="name"
                        name="teamname"
                        value={team.name}
                        onChange={(e) => handleTextInputChange("teamname", e)}
                        required
                      />
                      {nameError && (
                        <div className="error-message">{nameError}</div>
                      )}
                    </div>
                    <div className="mb-3 p-2 flex-fill">
                      <label htmlFor="team-post" className="col-form-label">
                        Post
                      </label>
                      <input
                        type="text"
                        className="form-control border border-2 shadow-sm bg-body-tertiary rounded"
                        id="team-post"
                        name="teampost"
                        // value={team.post}
                        onChange={(e) => handleTextInputChange("teampost", e)}
                        required
                      />
                      {postError && (
                        <div className="error-message">{postError}</div>
                      )}
                    </div>
                    <div className="mb-3 p-2 flex-fill">
                      <label htmlFor="team" className="col-form-label">
                        Team
                      </label>
                      <input
                        type="text"
                        className="form-control border border-2 shadow-sm bg-body-tertiary rounded"
                        id="team"
                        name="team"
                        value={team.team}
                        onChange={(e) => handleTextInputChange("team", e)}
                        required
                      />
                      {teamError && (
                        <div className="error-message">{teamError}</div>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="team-bio" className="col-form-label">
                      Bio
                    </label>
                    <textarea
                      className="form-control border border-2 shadow-sm bg-body-tertiary rounded"
                      id="team-bio"
                      name="teambio" // <-- Corrected name attribute
                      // value={team.bio}
                      onChange={(e) => handleTextInputChange("teambio", e)} // <-- Corrected identifier
                      required
                    ></textarea>
                    {bioError && (
                      <div className="error-message">{bioError}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="team-sociallinks"
                      className="col-form-label"
                    >
                      Social Links
                    </label>
                    {textInputs.map((textInput, index) => (
                      <div className="minus" key={index}>
                        <div className="team-sociallinksInput">
                          <input
                            type="text"
                            id={`team-sociallinks-${index}`}
                            name={`teamsociallinks-${index}`}
                            value={team.social_links[index] || ""}
                            className="form-control border border-2 shadow-sm bg-body-tertiary rounded"
                            onChange={(e) => handlelinksInputChange(e, index)}
                            required
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
                        {social_linksError && (
                          <div className="error-message">
                            {social_linksError}
                          </div>
                        )}
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
              <div className="modal-header"></div><br/>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
                <ToastContainer />{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="TeamTile">
          {teamMembers.map((member, index) => (
            <TeamTile
              // _id={member._id}
              // name={member.name}
              // job={member.post}
              // img={member.pic} // Assuming pic is the image URL
              // links={member.social_links}
              team={member}
              onDelete={(event) => handleDelete(event, member._id)}

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
        <Footer />
      </div>
    </>
  );
};

export default Team;

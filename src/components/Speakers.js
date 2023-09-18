import React, { useState, useEffect } from "react";
import "./Speakers/Speakers.css";
import Navbar from "./Navbar";
import SpeakersTile from "./Speakers/SpeakersTile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SecFooter from "./SecFooter";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { hostname } from "../hostname";
// import minus from "../img/minus-solid.svg";
export default function Speakers() {
  const [getspeakers, setgetSpeakers] = useState([]);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
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
  const fetchSpeakers = async () => {
    try {
      const response = await fetch(`${hostname}/all-speaker`);
      if (response.ok) {
        const data = await response.json();
        console.log(data.speakers);
        setgetSpeakers(data.speakers);
      } else {
        console.error("Failed to fetch speakers");
      }
    } catch (error) {
      console.error("Error fetching speakers:", error);
    }
  };
  useEffect(() => {
    fetchSpeakers();
  }, []);
  const [textInputs, setTextInputs] = useState([""]);
  // const exampleModal = document.geElementById("exampleModal");

  const [nameError, setnameError] = useState("");
  const [postError, setpostError] = useState("");
  const [universityError, setuniversityError] = useState("");
  const [cityError, setcityError] = useState("");
  const [stateError, setstateError] = useState("");
  const [pincodeError, setpincodeError] = useState("");
  const [aboutError, setaboutError] = useState("");
  const [sociallinksError, setsocsociallinksError] = useState("");
  const [selectedspeakerprofilephoto, setSelectedspeakerprofilephoto] =
    useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  useEffect(() => {
    const exampleModal = document.getElementById("exampleModal");
    if (exampleModal) {
      exampleModal.addEventListener("show.bs.modal", (event) => {
        // Your event handling code here
      });
    }
  }, []);
  const [speaker, setspeaker] = useState({
    name: "",
    post: "",
    university: "",
    city: "",
    state: "",
    pincode: "",
    about: "",
    sociallinks: [],
    selectedspeakerprofilephoto: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === "file" ? files[0] : value;
    setspeaker({ ...speaker, [name]: newValue });

    setspeaker((prevSpeaker) => ({
      ...prevSpeaker,
      [name]: newValue,
    }));

    // Set the selected file for display
    setSelectedFile(files[0]);

    if (type === "file") {
      const speakerprofilephoto = files[0];
      // Create a temporary URL for the selected image
      const imageUrl = URL.createObjectURL(files[0]);
      setSelectedspeakerprofilephoto(imageUrl); // Store the URL in state
      setspeaker({ ...speaker, [name]: speakerprofilephoto });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(speaker.sociallinks);
    console.log(1);
    if (
      !speaker.name ||
      !speaker.post ||
      !speaker.university ||
      !speaker.city ||
      !speaker.state ||
      !speaker.pincode ||
      !speaker.about ||
      speaker.sociallinks.length === 0
    ) {
      // Set error messages for the respective input fields
      if (!speaker.name) {
        setnameError(" Name is required.");
      }
      if (!speaker.post) {
        setpostError("Post is required.");
      }
      if (!speaker.university) {
        setuniversityError("University are required.");
      }
      if (!speaker.city) {
        setcityError("City are required.");
      }
      if (!speaker.state) {
        setstateError("State are required.");
      }
      if (!speaker.pincode) {
        setpincodeError("Pincode are required.");
      }
      if (!speaker.about) {
        setaboutError("About are required.");
      }
      if (!speaker.sociallinks) {
        setsocsociallinksError("Social Links  are required.");
      }
      // Prevent form submission
      toast("Error Occured!", {
        position: "top-right",
        backgroundColor: "#0E8388",
      });
      return;
    }

    // Continue with form submission or other actions
    const ProfilePicFile = new File(
      [selectedspeakerprofilephoto],
      "speaker_pic.jpg"
    );
    console.log(ProfilePicFile);
    const formData = new FormData();
    speaker.sociallinks.forEach((link) => {
      formData.append("social_links", link);
    });
    formData.append("name", speaker.name);
    formData.append("post", speaker.post);
    formData.append("university", speaker.university);
    formData.append("city", speaker.city);
    formData.append("state", speaker.state);
    formData.append("pincode", speaker.pincode);
    formData.append("about", speaker.about); // Replace with the appropriate team value
    formData.append("file", ProfilePicFile);
    // formData.append("teamprofilephoto", file); // Replace 'file' with your file input reference
    // console.log(localStorage.getItem("adminAuthToken"));
    fetch(`${hostname}/admin/add-speaker`, {
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
          console.log("Speaker added successfully:", data.team_member);
          fetchSpeakers();
          // Close the modal (if you want)
          // Add code to close the modal here if needed
          toast("Successfully Submited!", {
            position: "top-right",
            backgroundColor: "#0E8388",
          });
        } else {
          // Error occurred while adding a team member, handle the error message
          console.error("Error adding Speaker:", data.message);
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

  const removeTextInput = (index) => {
    if (textInputs.length > 1) {
      const updatedInputs = [...textInputs];
      updatedInputs.splice(index, 1);
      setTextInputs(updatedInputs);
    }
  };

  const addTextInput = () => {
    setTextInputs([...textInputs, ""]);
    setspeaker((prevSpeaker) => ({
      ...prevSpeaker,
      sociallinks: [...prevSpeaker.sociallinks, ""],
    }));
  };

  const handleTextInputChange = (identifier, event, index) => {
    // Ensure that the event object is properly passed
    if (event && event.target) {
      // Create a copy of the speaker object
      const updatedSpeaker = { ...speaker };

      // Update the corresponding field based on the identifier
      if (identifier === "speakername") {
        updatedSpeaker.name = event.target.value;
        setnameError("");
      } else if (identifier === "speakerpost") {
        updatedSpeaker.post = event.target.value;
        setpostError("");
      } else if (identifier === "speakeruniversity") {
        updatedSpeaker.university = event.target.value;
        setuniversityError("");
      } else if (identifier === "speakercity") {
        updatedSpeaker.city = event.target.value;
        setcityError("");
      } else if (identifier === "speakerstate") {
        updatedSpeaker.state = event.target.value;
        setstateError("");
      } else if (identifier === "speakerpincode") {
        updatedSpeaker.pincode = event.target.value;
        setpincodeError("");
      } else if (identifier === "speakerabout") {
        updatedSpeaker.about = event.target.value;
        setaboutError("");
      }

      // Update the state with the modified speaker object
      setspeaker(updatedSpeaker);
    }
  };
  const handlelinksInputChange = (event, index) => {
    const updatedSocialLinks = [...speaker.sociallinks];
    updatedSocialLinks[index] = event.target.value;
    setspeaker({
      ...speaker,
      sociallinks: updatedSocialLinks,
    });
  };
  return (
    <div className="speakers">
      <Navbar />
      <div className="speakersheader">
        <span className="speakerstext">Our</span> Speakers
      </div>
      {user && user.type === "admin" && (
        <div
          className="registeryourself"
          style={{ marginLeft: "9vw", marginTop: "3vw" }}
        >
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add Speaker
          </button>
        </div>
      )}  
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg"
          style={{ marginLeft: "30vw", maxWidth: "150%", marginRight: "-90vw" }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Speaker Registration
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
                <div class="mb-3 ">
                  <label for="formFile" className="form-label">
                    Profile Photo
                  </label>
                  {selectedspeakerprofilephoto && (
                    <img
                      className="speakerprofilephoto"
                      src={selectedspeakerprofilephoto}
                      alt="SelectedProfilePhoto"
                    />
                  )}
                  <input
                    className="form-control"
                    name="speakerprofilephoto"
                    type="file"
                    id="formFile"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="d-flex">
                  <div className="mb-3 p-2 flex-fill">
                    <label htmlFor="speaker-name" className="col-form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control border border-2 shadow-sm bg-body-tertiary rounded"
                      id="speaker-name"
                      name="speakername"
                      value={speaker.name}
                      onChange={(e) => handleTextInputChange("speakername", e)}
                      required
                    />
                    {nameError && (
                      <div className="error-message">{nameError}</div>
                    )}
                  </div>
                  <div className="mb-3 p-2 flex-fill">
                    <label htmlFor="speaker-post" className="col-form-label">
                      Post
                    </label>
                    <input
                      type="text"
                      className="form-control border border-2 shadow-sm bg-body-tertiary rounded"
                      id="speaker-post"
                      name="speakerpost"
                      value={speaker.post}
                      onChange={(e) => handleTextInputChange("speakerpost", e)}
                      required
                    />
                    {postError && (
                      <div className="error-message">{postError}</div>
                    )}
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="speaker-university"
                    className="col-form-label"
                  >
                    University
                  </label>
                  <input
                    type="text"
                    className="form-control border border-2 shadow-sm bg-body-tertiary rounded"
                    id="speaker-university"
                    name="speakeruniversity"
                    value={speaker.university}
                    onChange={(e) =>
                      handleTextInputChange("speakeruniversity", e)
                    }
                    required
                  />
                  {universityError && (
                    <div className="error-message">{universityError}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="col-form-label">Location</label>
                  <div className="d-flex">
                    <span className="p-2 flex-fill">
                      <label htmlFor="speaker-city" className="col-form-label">
                        city
                      </label>
                      <input
                        type="text"
                        className="form-control border border-2 shadow-sm bg-body-tertiary rounded"
                        id="speaker-city"
                        name="speakercity"
                        value={speaker.city}
                        onChange={(e) =>
                          handleTextInputChange("speakercity", e)
                        }
                        required
                      />
                      {cityError && (
                        <div className="error-message">{cityError}</div>
                      )}
                    </span>
                    <span className="p-2 flex-fill">
                      <label htmlFor="speaker-state" className="col-form-label">
                        state
                      </label>
                      <input
                        type="text"
                        className="form-control border border-2 shadow-sm bg-body-tertiary rounded"
                        id="speaker-state"
                        name="speakerstate"
                        value={speaker.state}
                        onChange={(e) =>
                          handleTextInputChange("speakerstate", e)
                        }
                        required
                      />
                      {stateError && (
                        <div className="error-message">{stateError}</div>
                      )}
                    </span>
                    <span className="p-2 flex-fill">
                      <label
                        htmlFor="speaker-pincode"
                        className="col-form-label"
                      >
                        Pincode
                      </label>
                      <input
                        type="text"
                        className="form-control border border-2 shadow-sm bg-body-tertiary rounded"
                        id="speaker-pincode"
                        name="speakerpincode"
                        value={speaker.pincode}
                        onChange={(e) =>
                          handleTextInputChange("speakerpincode", e)
                        }
                        required
                      />
                      {pincodeError && (
                        <div className="error-message">{pincodeError}</div>
                      )}
                    </span>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="speaker-about" className="col-form-label">
                    About
                  </label>
                  <textarea
                    className="form-control border border-2 shadow-sm bg-body-tertiary rounded"
                    id="speaker-about"
                    name="speakerabout"
                    value={speaker.about}
                    onChange={(e) => handleTextInputChange("speakerabout", e)}
                    required
                  ></textarea>
                  {aboutError && (
                    <div className="error-message">{aboutError}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="speaker-sociallinks"
                    className="col-form-label"
                  >
                    Social Links
                  </label>
                  {textInputs.map((textInput, index) => (
                    <div className="minus" key={index}>
                      <div className="speaker-sociallinksInput">
                        <input
                          type="text"
                          id={`speaker-sociallinks-${index}`}
                          name={`speakersociallinks-${index}`}
                          // value={speaker.sociallinks[index] || ""} // Use the value from the state based on the index
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
                      {sociallinksError && (
                        <div className="error-message">{sociallinksError}</div>
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
            <div className="modal-footer">
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
      </div>
      <div className="SpeakersTile">
        {getspeakers.map((speaker) => (
          <SpeakersTile
            _id={speaker._id}
            speakername={speaker.name}
            university={speaker.university}
            image={speaker.pic} // Assuming pic is the image URL
            links={speaker.social_links}
          />
        ))}
      </div>
      <SecFooter />
      <Footer />
    </div>
  );
}

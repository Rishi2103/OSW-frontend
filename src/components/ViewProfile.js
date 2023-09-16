import React, { useState } from "react";
import "./ViewProfile.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import profile_card_img from "../img/profile-img.jpg";

const ViewProfile = () => {
  const [isProfileEditOpen, setIsProfileEditOpen] = useState(false);
  const [file, setFile] = useState();

  // function handleChange(e) {
  //     console.log(e.target.files);
  //     setFile(URL.createObjectURL(e.target.files[0]));
  // }

  const [selectedImage, setSelectedImage] = useState(profile_card_img);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const openProfieEdit = () => {
    setIsProfileEditOpen(true);
  };
  const closeProfileEdit = () => {
    setIsProfileEditOpen(false);
  };
  return (
    <div>
      <Navbar />
      <div className="profile-con">
        <div className="profile-card">
          <div className="profile-card-img">
            <img src={profile_card_img} alt="" />
          </div>
          <div className="profile-username">
            <p>Username</p>
          </div>
          <span className="edit-button" onClick={openProfieEdit}>
            <i class="fa-solid fa-pen-to-square"></i>
          </span>
        </div>
      </div>
      {isProfileEditOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={closeProfileEdit}>
              &times;
            </span>
            {/* Your form content goes here */}
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "17px",
              }}
            >
              <div
                className="form-field"
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* {selectedImage && ( */}
                {/* <div> */}
                <img
                  src={selectedImage}
                  alt="Preview"
                  style={{
                    maxWidth: "20%",
                    borderRadius: "50%",
                    marginBottom: "20px",
                  }}
                />
                {/* </div> */}
                {/* )} */}
                <div style={{ display: "flex" }}>
                  <label>Profile Photo: </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
              </div>

              <div className="form-field">
                <label>Username:</label>
                <input type="text" required />
              </div>
              <div className="form-field">
                <label>Email:</label>
                <input type="text" required />
              </div>
              <div className="form-field">
                <label>First Name:</label>
                <input type="text" required />
              </div>
              <div className="form-field">
                <label>Last Name:</label>
                <input type="text" required />
              </div>
              <div className="form-field">
                <label>Contact No.:</label>
                <input type="text" required />
              </div>

              <button className="modal-submit" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ViewProfile;

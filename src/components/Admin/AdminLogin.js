import React, { useEffect, useState } from "react";
import "./AdminLogin.css";
import user_icon from "../../img/person.png";
import email_icon from "../..//img/email.png";
import password_icon from "../../img/password.png";
import { GoogleLogin } from "react-google-login";

const clientId =
  "574757039734-2hfvakv45d24o82mp3r80akqri2b70mq.apps.googleusercontent.com";
const AdminLogin = () => {
  const [action, setaction] = useState("LogIn");
  const [optLoginOpen, setOtpLogin] = useState(false);

  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! Current User: ", res.profileObj);
  };
  const onFailure = (res) => {
    console.log("LOGIN FAILURE! res: ", res);
  };
  const openOtpLogin = () => {
    setOtpLogin(true);
  };
  const closeOtpLogin = () => {
    setOtpLogin(false);
  };

  return (
    <div className="login-bg">
      <div className="login-con">
        <div className="submit-container">
          {/* <div className={action==='LogIn' ? 'submit gray':'submit'} onClick={() => {setaction("Sign Up")}}>Sign Up</div> */}
          {/* <div className={action==='Sign Up' ? 'submit gray': 'submit'} onClick={() => {setaction("LogIn")}}>Admin LogIn</div> */}
        </div>
        <div className="header">
          <div className="login-text">Admin Login</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          <div className="input">
            <img className="login-img" src={email_icon} alt="" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input">
            <img className="login-img" src={password_icon} alt="" />
            <input type="password" placeholder="Password" />
          </div>
        </div>

        <div className="forgot-password">
          Forgot Password? <span onClick={openOtpLogin}>Click Here!</span>
        </div>

        <div className="submit-button">
          <div className="submit-text">{action}</div>
        </div>
      </div>
      {optLoginOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={closeOtpLogin}>
              &times;
            </span>
            {/* Your form content goes here */}
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "25px",
                fontWeight: "700",
                textAlign: "center",
                marginBottom: "30px",
                color: "#0E8388",
              }}
            >
              Otp Login
            </p>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "17px",
              }}
            >
              <div className="form-field">
                <label>Email:</label>
                <input type="text" style={{ width: "100%" }} required />
              </div>
              <div>
                <button
                  className="modal-submit"
                  type="submit"
                  style={{ marginTop: "20px" }}
                >
                  Get OTP
                </button>
                <span
                  style={{
                    color: "#0E8388",
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "15px",
                    paddingLeft: "30px",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  Resend Otp
                </span>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminLogin;

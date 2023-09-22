import React, { useEffect, useState } from "react";
import "./AdminLogin.css";
import email_icon from "../..//img/email.png";
import password_icon from "../../img/password.png";
import { useNavigate } from "react-router-dom";
import { hostname } from "../../hostname";

const AdminLogin = () => {
  const [optLoginOpen, setOtpLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const openOtpLogin = () => {
    setOtpLogin(true);
  };

  const closeOtpLogin = () => {
    setOtpLogin(false);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch(`${hostname}/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const { result } = data;
        localStorage.setItem("adminAuthToken", result);
        // console.log(token);
        navigate("/", { replace: true });
        console.log("Login successful", data);
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("An error occurred during login", error);
    }
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
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <img className="login-img" src={password_icon} alt="" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="forgot-password">
          Forgot Password? <span onClick={openOtpLogin}>Click Here!</span>
        </div>

        <button
          className="submit-button"
          type="submit"
          onClick={() => {
            handleLogin();
          }}
        >
          Login
        </button>
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
                <label>Otp:</label>
                <input type="number" style={{ width: "100%" }} required />
              </div>
              <div>
                <button
                  className="modal-submit"
                  type="submit"
                  style={{ marginTop: "20px" }}
                >
                  Log In
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

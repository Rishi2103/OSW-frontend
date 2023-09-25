import React, { useState } from "react";
import "./AdminLogin.css";
import email_icon from "../../img/email.png";
import password_icon from "../../img/password.png";
import { useNavigate } from "react-router-dom";
import { hostname } from "../../hostname";

const AdminForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("email"); // "email" or "otp"
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    // Add logic to send OTP to the provided email
    // For simplicity, we'll directly move to the OTP step
    if (!email || email.trim() === "") {
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return;
    }
    const data = { email: email };

    try {
      const response = await fetch(`${hostname}/admin/forgotpassword`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStep("otp");
      } else {
        const errorData = await response.json();
        console.log(errorData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (e) => {
    // Handle login logic using the entered OTP
    // ...
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          authorization: localStorage.getItem("userAuthToken"),
        },
      };

      const response = await fetch(`${hostname}/admin/templogin`, {
        method: "POST",
        headers: config.headers,
        body: JSON.stringify({
          email,
          otp,
        }),
      });
      let data;
      if (response.ok) {
        data = await response.json();
        const { result } = data;
        localStorage.setItem("adminAuthToken", result);
        // console.log(token);
        console.log("login Successfully");
        navigate("/");
      } else {
        const errorData = await response.json();
        console.log(errorData);
        throw new Error("Failed to verify. Please try again later.");
      }
    } catch (error) {
      console.log(error);
      console.log(12);
      return; // Prevent further execution
    }
    // For simplicity, we'll just log the OTP for now
    console.log("OTP entered:", otp);
  };

  return (
    <div className="login-bg">
      <div className="login-con">
        <div className="header">
          <div className="login-text">Admin Otp Login</div>
          <div className="underline"></div>
        </div>

        {step === "email" && (
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
            <button
              className="submit-button"
              type="button"
              onClick={() => handleSendOtp()}
            >
              Send OTP
            </button>
          </div>
        )}

        {step === "otp" && (
          <div className="inputs">
            <div className="input">
              <img className="login-img" src={password_icon} alt="" />
              <input
                type="number"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
            <div className="button-container">
              <button className="submit-button" onClick={(e) => handleLogin()}>
                Login
              </button>
              <button className="submit-button" onClick={() => handleSendOtp()}>
                Resend OTP
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminForgotPassword;

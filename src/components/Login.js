import React, {useEffect, useState} from "react";
import './Login.css';
import user_icon from '../img/person.png';
import email_icon from '../img/email.png';
import password_icon from '../img/password.png';
import {GoogleLogin} from 'react-google-login';

const clientId = "574757039734-2hfvakv45d24o82mp3r80akqri2b70mq.apps.googleusercontent.com";
const Login = () => {

  const [action, setaction] = useState("LogIn");

  const onSuccess = (res) => {
    console.log('LOGIN SUCCESS! Current User: ', res.profileObj);
  }
  const onFailure = (res) => {
    console.log('LOGIN FAILURE! res: ', res);
  }
    return(
        <div className="login-bg">
          <div className="login-con">
          <div className="submit-container">
            <div className={action==='LogIn' ? 'submit gray':'submit'} onClick={() => {setaction("Sign Up")}}>Sign Up</div>
            <div className={action==='Sign Up' ? 'submit gray': 'submit'} onClick={() => {setaction("LogIn")}}>LogIn</div>
          </div>
          <div className="header">
            <div className="login-text">{action}</div>
              <div className="underline"></div>
          </div>

          <div className="inputs">
            {action==='LogIn'? <div></div>: <div className="input">
              <img className="login-img" src={user_icon} alt="" />
              <input type="text" placeholder="Username" />
            </div>}
            <div className="input">
              <img className="login-img" src={email_icon} alt="" />
              <input type="email" placeholder="Email"/>
            </div>
            <div className="input">
              <img className="login-img" src={password_icon} alt="" />
              <input type="password" placeholder="Password"/>
            </div>
            {action==='LogIn'? <div></div>: 
            <div className="input">
              <img className="login-img" src={password_icon} alt="" />
              <input type="password" placeholder="Confirm Password"/>
            </div>}
          </div>
          {action==='Sign Up'? <div></div>: 
          <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
         
          <div className='submit-button'><div className="submit-text">{action}</div></div>

          <div className="signInButton">
            <GoogleLogin
              clientId={clientId}
              buttonText="Continue with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
            />
          </div>
          </div>
        </div>
    )
}

export default Login;
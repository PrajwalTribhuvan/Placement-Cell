import React, { useState } from "react";
import "./LoginNew.css";
import loginImage from "../Asset/img/img1.svg";
import registerImage from "../Asset/img/programming.svg";
import { useStateValue } from "../../Context/StateProvider";
import { actionTypes } from "../../Context/reducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import {
  faIdBadge,
  faEnvelope,
  faUser,
  faLock,
  faMailReply,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";

export default function LoginNew() {
  const [signMode, setSignMode] = useState(true);
  const [usn, setUsn] = useState("");
  const [pass, setPass] = useState("");
  const [{ userState }, dispatchUser] = useStateValue();
  const [{ adminState }, dispatchAdmin] = useStateValue();
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPass, setAdminPass] = useState("");


  const URL = "http://localhost:3001";
  
 

  async function login() {
    const response = await fetch(URL + "/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        usn: usn,
        pass: pass,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          dispatchUser({
            type: actionTypes.SET_USER,
            user: data,
          });
          console.log("Login Success");
        } else {
          console.log("Login Fail");
        }
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  const adminLogin = () => {
    Axios.post(`${URL}/admin`, {
      email: adminEmail,
      pass: adminPass,
    }).then((response) => {
      if (response.data.message) {
        return toast("Invalid Username/Password", { type: "error" });
      } else {
        dispatchAdmin({
          type: actionTypes.SET_ADMIN,
          admin: response.data,
        });
      }
    });
  };

  return (
    <div>
      <div
        className={"container " + (signMode ? "sign-up-mode" : "sign-in-mode")}
      >
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Student Login </h2>
              <div className="input-field">
                <i className="fas fa-user">
                  <FontAwesomeIcon icon={faUser} />
                </i>
                <input
                  type="text"
                  placeholder="Username"
                  onChange={(e) => {
                    setUsn(e.target.value);
                  }}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" id="eye" onclick="toggle()">
                  <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                </i>
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                />
              </div>
              <input
                type="submit"
                defaultValue="Login"
                className="btn solid"
                id="loginBtn"
                onClick={login}
              />
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">
                Admin Login </h2>
              <div className="input-field">
                <i className="fas fa-user">
                  <FontAwesomeIcon icon={faEnvelope} />
                </i>
                <input
                  type="text"
                  placeholder="Email"
                  onChange={(e) => {
                    setAdminEmail(e.target.value);
                  }}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" id="eye" onclick="toggle()">
                  <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                </i>
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  onChange={(e) => {
                    setAdminPass(e.target.value);
                  }}
                />
              </div>
              <input
                type="submit"
                defaultValue="Login"
                className="btn solid"
                id="loginBtn"
                onClick={adminLogin}
              />
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>You Have Admin Access?</h3>
              <p>Join And Grow Old With Us</p>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={() => {
                  setSignMode(true);
                }}
              >
                Admin Login
              </button>
            </div>
            <img src={registerImage} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>Are You Student ?</h3>
              <p>We're A Team that Guides Each Other</p>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={() => {
                  setSignMode(false);
                }}
              >
                Student Login
              </button>
            </div>
            <img src={loginImage} className="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

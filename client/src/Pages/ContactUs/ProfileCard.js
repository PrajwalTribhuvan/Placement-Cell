import React from "react";
import "./ContactUs.css";
import contactusImg from "../Asset/img/contact.svg";
import sanketImg from "../Asset/img/sanket.jpg";
import Copyright from "../../components/Copyright/Copyright";
import Footer from "../../components/Footer/Footer";

export default function ProfileCard({developer}) {
  return (
    <>
      <div className="card">
        <img
          className="contactCardImg"
          src={developer.profileImg}
          alt="John"
          style={{ width: "100%" }}
        />
        <h1>{developer.name}</h1>
        <p className="title">{developer.role}</p>
        <p>VIIT Pune</p>
        <p>
          <button>Contact</button>
        </p>
      </div>
    </>
  );
}

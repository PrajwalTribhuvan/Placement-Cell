import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer_wrapper">
        <div className="footer_desc">
          <h1>VIIT</h1>
          <p>Vishwakarma Institute of Information Technology, Pune </p>
          <p id="phone">305 - 123 - 4567</p>
        </div>
        <div className="footer_links">
          <h2 className="footer_title">About VIIT</h2>
          <a
            href="https://www.viit.ac.in/about-us/about-bract"
            target="blank"
            className="footer_link"
          >
            Management 
          </a>
          <a
            href="https://www.viit.ac.in/about-us/programmes"
            target="blank"
            className="footer_link"
          >
            Programme
          </a>
          <a
            href="https://www.viit.ac.in/about-us/awards"
            target="blank"
            className="footer_link"
          >
            Awards and Accreditation 
          </a>
          <a
            href="https://www.viit.ac.in/about-us/disclosure/mandatory-disclosure"
            target="blank"
            className="footer_link"
          >
            Mandatory Disclosure
          </a>
        </div>
      </div>
      <div id="footer" className="footer_wrapper">
        <div className="footer_links">
          <h2 className="footer_title">Placements</h2>
          <a
            href="https://www.viit.ac.in/placement-i2ic"
            target="blank"
            className="footer_link"
          >
            Placements
          </a>
          <a
            href="https://www.viit.ac.in/placement-i2ic"
            target="blank"
            className="footer_link"
          >
            Campus Placements
          </a>
          <a
            href="https://www.viit.ac.in/placement-i2ic"
            target="blank"
            className="footer_link"
          >
            Additional Placements
          </a>
        </div>
        <div className="footer_links">
          <h2 className="footer_title">Get in Touch</h2>
          <a
            href="https://www.viit.ac.in/"
            target="blank"
            className="footer_link"
          >
            VIIT, Pune
          </a>
          <a
            href="https://www.facebook.com/viitpu/?ref=bookmarks"
            target="blank"
            className="footer_link"
          >
            Facebook
          </a>
          <a
            href="https://www.youtube.com/channel/UCAkJjvfT8-h0Ex4E2P-Utfg"
            target="blank"
            className="footer_link"
          >
            Youtube
          </a>
          <a
            href="https://twitter.com/viit_pune"
            target="blank"
            className="footer_link"
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import "./Hero.css";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <div className="hero">
      <div className="hero_content">
        <h1 className="animate-hero">Vishwakarma Institute of Information Technology, Pune</h1>
        <p className="animate-hero typingName">
          <Typewriter
            options={{
              strings: [
                "Placement Management System",
                "Developed by Sanket, Prajwal, Bhavin",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </p>
      </div>
    </div>
  );
}

export default Hero;

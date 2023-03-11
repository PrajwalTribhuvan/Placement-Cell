import React from "react";
import "./Copyright.css";
function Copyright() {
  return (
    <div>
      <div className="footer-style">
       <p> Copyright © Team TY-C &nbsp; {new Date().getFullYear()} </p>
      </div>
    </div>
  );
}

export default Copyright;

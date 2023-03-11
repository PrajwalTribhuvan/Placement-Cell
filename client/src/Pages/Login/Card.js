import React from "react";

 export default function Card({ receiver, writer }) {
    return (
      <div>
        <h1 style={{ 
            backgroundColor: "lightblue", 
            width: "fit-content" 
        }}>
          GeeksforGeeks 
        </h1>
          
        <h2 style={{ 
            backgroundColor: "lightgrey", 
            width: "fit-content" 
        }}>
          A Computer Science portal for geeks. 
          It contains well written, well 
          thought and well explained computer 
          science and programming articles
        </h2>
          
        <h3>Your truly, {writer}</h3>
      </div>
    );
  }
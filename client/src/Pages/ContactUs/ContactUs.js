import React from "react";
import "./ContactUs.css";
import contactusImg from "../Asset/img/contact.svg";
import sanketImg from "../Asset/img/sanket.jpg";
import bhavinImg from "../Asset/img/bhavin.jpg";
import prajwalImg from "../Asset/img/prajwal.jpg";
import Copyright from "../../components/Copyright/Copyright";
import Footer from "../../components/Footer/Footer";
import ProfileCard from "./ProfileCard";
// import ApexCharts from 'apexcharts';
// import ReactApexChart from "react-apexcharts";
function teamData(nameValue, roleValue, profilePic) {
  const user = {
    name: nameValue,
    role: roleValue,
    profileImg: profilePic,
  };
  return user;
}
export default function ContactUs() {

  const graph = {
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  const sanketData = teamData(
    "Sanket Supekar",
    "Software Developer",
    sanketImg
  );
  const prajwalData = teamData(
    "Prajwal Tribhuwan",
    "UI/UX Developer",
    prajwalImg
  );
  const bhavinData = teamData("Bhavin Shah", "Database Developer", bhavinImg);
  // console.log(sanketData);
  // console.log(prajwalData);
  // console.log(bhavinData);
  return (
    <>
      <div className="containerWrap">
        <div className="contentheading">
          <h1>Contact Us</h1>
        </div>
        <div className="cardWrap">
          <ProfileCard developer={sanketData} />
          <ProfileCard developer={prajwalData} />
          <ProfileCard developer={bhavinData} />
        </div>
      </div>
      <Footer />
      <Copyright />
    </>
  );
}

import React from "react";
import "./About.css";
import aboutImg from "../Asset/img/aboutus1.svg";
import Footer from "../../components/Footer/Footer";
import Copyright from "../../components/Copyright/Copyright";
export default function About() {
  return (
    <>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <div className="contentpara">
              <div className="contentheading"></div>
              <div className="para">
                <br />
                <h1>About Us</h1>
                <br />
                <p>
                  &nbsp; The Training and Placement Department of VIIT
                  facilitates career guidance and training assistance for the
                  students in order to achieve their career goals. The T&amp;P
                  cell identifies the current industry trends and facilitates
                  the students to gain the latest skills and knowledge required
                  by industry. VIIT T&amp;P cell plays a pivotal role in guiding
                  the students to achieve their career goals. VIIT T&amp;P cell
                  conducts training activities with the help of industry
                  experts, alumni and corporate trainers to prepare the students
                  industry-ready. Audit Course (Aptitude, soft skill and
                  technical training) conducted through T&amp;P Cell for
                  pre-final year students.
                </p>
                <p>
                  <br />
                  &nbsp; Training Placement Officer with ATPO, Dept coordinator
                  and student council from all the department works together to
                  run the T&amp;P cell. Job oriented refreshers courses and
                  special training programmes are regularly conducted. VIIT also
                  arranges guest lectures by Industry experts, distinguished
                  alumni for training students and faculty members. The VIIT
                  T&amp;P cell collaborates with the corporates and
                  organizations across India to provide on-campus job
                  opportunities to the students.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel right-panel">
            <img src={aboutImg} className="image1" alt="" />
          </div>
        </div>
      </div>
      <Footer />
      <Copyright />
    </>
  );
}

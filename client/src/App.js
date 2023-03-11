import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import React, { useEffect } from 'react';
import Nav from "./components/Nav/Nav";
import { useStateValue } from "./Context/StateProvider";
import Companies from "./Pages/Companies/Companies";
import Home from "./Pages/Home/Home";
import newLogin from "./Pages/Login/LoginNew";
import Login from "./Pages/Login/Login";
import Placements from "./Pages/Placements/Placements";
import Students from "./Pages/Students/Students";
import Card from './Pages/Login/Card';
import { actionTypes } from "./Context/reducer";
import LoginNew from "./Pages/Login/LoginNew";
import About from "./Pages/About/About";
import ContactUs from "./Pages/ContactUs/ContactUs";
import OurRecruiters from "./Pages/OurRecruiters/OurRecruiters";
/* eslint-disable */


function App() {
  const [{ user }, dispatchUser] = useStateValue();
  const [{ admin }, dispatchAdmin] = useStateValue();

  // useEffect(() => {
  //   const data = {email : "ajr@gmail.com", pass : "aditi"};
  //    dispatchAdmin({
  //         type: actionTypes.SET_ADMIN,
  //         admin: data,
  //       });
  // }, []);
  return (
    <>
     {!admin && !user ? (
        <LoginNew />
     ) : (
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/ourrecruiters">
              <OurRecruiters />
            </Route>
            <Route exact path="/companies">
              <Companies />
            </Route>
            <Route exact path="/placements">
              <Placements />
            </Route>
            <Route exact path="/students">
              <Students />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/contactus">
              <ContactUs />
            </Route>
          </Switch>
        </Router>
     )}
    </> 
  );
}

export default App;

import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from "./component/Home/home";
import Onboarding from "./component/Onboarding/onboarding";
import Certifications from "./component/Certifications/certifications";
import Events from "./component/Events/Events";
import Team from "./component/Team/Team";
import Goals from "./component/Goals/Goals";
import Fomo from "./component/Fomo/Fomo";

import Header from "./component/Common/Header";
// import Footer from "./component/Common/Footer";

const Routees = ({ props }) => {
    return (
        <Router>
            <Header/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/onboarding" element={<Onboarding/>}/>
            <Route exact path="/certifications" element={<Certifications/>}/>
            <Route exact path="/events" element={<Events/>}/>
            <Route exact path="/team" element={<Team/>}/>
            <Route exact path="/goals" element={<Goals/>}/>
            <Route exact path="/fomo" element={<Fomo/>}/>
        </Routes>
        {/* <Footer/>  */}
        </Router>
        // <p>This is Route Page</p>
    );
};

export default Routees;
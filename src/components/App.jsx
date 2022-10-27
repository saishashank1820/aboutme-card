import React from "react";
import UserId from "./UserId";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
export default function App(){
    return(
        <div className="main">
            <UserId/>
            <AboutMe/>
            <Footer/>
        </div>
    )
}
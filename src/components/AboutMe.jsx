import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
export default function AboutMe(){
    return(
        <div className="about-me-main">
            <section className="about-me-main-descrp">
                <h1>Sai Shashank</h1>
                <p className="aspired-role">wants to be Front end developer</p>
                <ul>
                    <li className="email-button"><button className="mail-btn"><FontAwesomeIcon icon={faEnvelope}/> Email</button></li>
                    <li className="linkedin-button"><button className="link-btn"><FontAwesomeIcon icon={faLinkedinIn}/> Linkedin</button></li>
                </ul>
            </section>
            <section className="about-me-descrp">
                <h3 className="about-heading">About</h3>
                <p className="about-descp">I am a config engineer supporting a banking application.
                    Currenly learning react as I am aspiring to become a front end developer.
                    Completed studies in the year 2022 and started carrier at TCS</p>
                <h3 className="int-heading">Interests</h3>
                <p className="int-descp">A techie who loves electronics.
                    Huge fan of PC gaming.
                    A guy in 20's who loves food and travel at times 😊</p>
            </section>
        </div>
    )
}
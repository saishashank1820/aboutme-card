import React from "react";
import { faFacebook, faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer(){
    return(
        <div className="footer">
            <ul>
                <li><a href="https://www.twitter.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} size ="2x" color="white"/></a></li>
                <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} size ="2x" color="white" /></a></li>
                <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} size ="2x" color="white" /></a></li>
                <li><a href="https://www.github.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size ="2x" color="white"/></a></li>
            </ul>
        </div>
    )
}
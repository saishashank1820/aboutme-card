import React from "react";
import userpic from '../images/userpic.jpg'

export default function UserId(){
    return(
        <div className="user-main">
            <img className = "user-pic" src={userpic} alt="userpicture"/>
        </div>
    )
}
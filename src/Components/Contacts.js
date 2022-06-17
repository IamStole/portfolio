import React from "react";
import {BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'

const Contatcs= () => {
    return ( 
        <div>
            <div className="contacts-text">
            <h3>Send me an email</h3>
            <h1>iamstolee@gmail.com</h1>
            <h3>or try to find me on social media:</h3>
            </div>
            <div className="icons">
                <a href="https://github.com/IamStole"
                className="github icon"><BsGithub /></a>
                <a href="https://www.instagram.com/stole998/"
                className="instagram icon"><BsInstagram /></a>
                <a href="https://www.linkedin.com/in/iamstole/"
                className="linkedin icon"><BsLinkedin /></a>
            </div>
        </div>
    )
}

export default Contatcs
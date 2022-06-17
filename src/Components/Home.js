import React from "react";
import {SiHtml5, SiCss3, SiJavascript, SiReact} from 'react-icons/si'


const Home = () => {
    return ( 
        <div>
            <div className="main-text">
                <h3>Looking for a good front-end developer? </h3>
                <h4>I'm trying to become one, so i'm looking for opportunities to build my experience.</h4>
                <p>If you have some ideas or problems, let's see what i can do about that.</p>
                
            </div>
            <div className="card-container">
                <p>Here is curent languages i can help you with.</p>
                <div className="cards">
                <div className="card html" ><SiHtml5 /></div>
                <div className="card css" ><SiCss3 /></div>
                <div className="card javascript" ><SiJavascript /></div>
                <div className="card react" ><SiReact /></div>
                </div>
                  
                
            </div>
        </div>
    )
}

export default Home
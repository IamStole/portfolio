import React from "react";
import { BiHome, } from "react-icons/bi"
import { IoIosContact } from "react-icons/io"


const Navbar = () => {
    return (
        <div className="navbar">
            <a href="/"><BiHome /></a>
            <a href="/contacts"><IoIosContact /></a>
        </div>
    )
}

export default Navbar
import React from "react";
import './Navbar.css'
export default function Navbar(){
    return (
        <>
           <nav className="navbar">
            <div className="logo">
                <h1>Book My <span>Event</span></h1>
            </div>
            <div className="buttons">
                <button className="login">Login</button>
                <button className="sign-up">Signup</button>
            </div>
           </nav>
        </>
    )
}
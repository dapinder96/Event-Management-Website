import React from "react";
import './Footer.css'

export default function Footer() {
    return (
        <>
            <footer className="footer-bar">
                <div className="logo">
                    <h1>Book My <span>Event</span></h1>
                </div>

                <div className="subscribe-form">
                    <input type="email" placeholder="Enter your email" />
                    <button className="subscribe">Subscribe</button>
                </div>

                <div className="footer-links">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Get in touch</a>
                    <a href="#">FAQs</a>
                </div>

                <div className="conatiner">
                    <div className="language">
                        <button className="english">English</button>
                        <button className="spanish">Spanish</button>
                        <button className="hindi">Hindi</button>
                    </div>

                    <div className="social-links">
                        <a href="#" className="linkedin">
                            <img src="/src/assets/footer/LinkedinLogo.svg" alt="" />
                        </a>
                        <a href="#" className="instagram">
                            <img src="/src/assets/footer/InstagramLogo.svg" alt="" />
                        </a>
                        <a href="#" className="facebook">
                            <img src="/src/assets/footer/FacebookLogo.svg" alt="" />
                        </a>
                    </div>

                    <div className="copy-right">
                        <p>Non Copyright © 2024 Upload by BOOK MY EVENT
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

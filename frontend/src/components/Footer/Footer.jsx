import React from "react";
import './Footer.css'

const Footer = () => {
    
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <span>contact: (808) 277 - 8083</span>
                </div>
                <div className="footer-center">
                    <p className="copyright">
                    &copy; {new Date().getFullYear()} CampusNav. All Rights Reserved.
                    </p>
                </div>
                <div className="footer-right">
                    <nav className="nav">
                        <a href="#terms-of-conditions">Terms of Conditions</a>
                        <a href="#privacy-policy">Privacy Policy</a>
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {

    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };
    
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    {/* <span>contact: (123) 456 - 7899</span> */}
                </div>
                <div className="footer-center">
                    <p className="copyright">
                    &copy; {new Date().getFullYear()} CampusNav. All Rights Reserved.
                    </p>
                </div>
                <div className="footer-right">
                    <nav className="nav">
                        <a onClick={() => handleNavigation('/privacy-policy')}>{t('privacyPolicy')}</a>
                        <a onClick={() => handleNavigation('/terms-of-conditions')}>{t('termsOfConditions')}</a>
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
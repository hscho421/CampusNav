import React from "react";
import './Footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {

    const { t } = useTranslation();
    
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
                        <a href="#terms-of-conditions">{t('termsOfConditions')}</a>
                        <a href="#privacy-policy">{t('privacyPolicy')}</a>
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
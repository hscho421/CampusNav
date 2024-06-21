import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import logo from '../../assets/logo.png';
import './Header.css';

const Header = ({ onGetStarted, goHome }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="CampusNav Logo" onClick={goHome} />
            </div>

            <nav className="nav">
                <a onClick={() => handleNavigation('/how-it-works')}>{t('howItWorks')}</a>
                <a onClick={() => handleNavigation('/about-us')}>{t('aboutUs')}</a>
                <a onClick={() => handleNavigation('/contact')}>{t('contact')}</a>
                <a className="get-started-button" onClick={onGetStarted}>
                    {t('getStarted')}
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        fill="currentColor" 
                        className="bi bi-arrow-up-right" 
                        viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                    </svg>
                </a>
                <LanguageSelect />
            </nav>
        </header>
    );
}

export default Header;

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import screenDisplay from "../../assets/main.png";
import './HeroSection.css';

const HeroSection = ({ onGetStarted }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const elements = document.querySelectorAll('.hero-image img');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('pop-in');
          observer.unobserve(entry.target); // Stop observing once the animation is applied
        }
      });
    }, { threshold: 0.5 });

    elements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      elements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>{t('welcome')}</h1>
        <p>{t('description')}</p>
        <a href="#get-started" className="main-button" onClick={onGetStarted}>
          {t('getStarted')}
          <svg xmlns="http://www.w3.org/2000/svg" 
               width="30" 
               height="30" 
               fill="currentColor" 
               className="bi bi-arrow-up-right" 
               viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
          </svg>
        </a>
      </div>

      <div className="hero-image">
        <img src={screenDisplay} alt="Campus map displayed on a laptop" />
      </div>
    </section>
  );
}

export default HeroSection;

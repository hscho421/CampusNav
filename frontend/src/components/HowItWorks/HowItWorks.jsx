// src/components/HowItWorks/HowItWorks.js
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './HowItWorks.css';
import StepOneVideo from '../../assets/videos/step-1.mp4';
import StepTwoVideo from '../../assets/videos/step-2.mp4';
import StepThreeVideo from '../../assets/videos/step-3.mp4';
import StepFourVideo from '../../assets/videos/step-4.mp4';

const HowItWorks = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const elements = document.querySelectorAll('.step, .features-row p');

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
    <div className="how-it-works-container">
      <section className='image-display'>
        <h1>{t('gettingStarted')}</h1>
      </section>
      <section className='intro'>
        <h2>
          {t('embark')}
        </h2>
      </section>
      <section className="step-container">
        <div className="step">
          <div className='step-text'>
            <h3>{t('stepOne')}</h3>
            <p>{t('stepOneInfo')}</p>
          </div>
          <div className='step-image'>
            <video autoPlay muted>
              <source src={StepOneVideo}/>
            </video>
          </div>
        </div>
        <div className="step">
          <div className='step-text'>
            <h3>{t('stepTwo')}</h3>
            <p>{t('stepTwoInfo')}</p>
          </div>
          <div className='step-image'>
            <video autoPlay muted>
              <source src={StepTwoVideo}/>
            </video>
          </div>
        </div>
        <div className="step">
          <div className='step-text'>
            <h3>{t('stepThree')}</h3>
            <p>{t('stepThreeInfo')}</p>
          </div>
          <div className='step-image'>
          <video autoPlay muted>
              <source src={StepThreeVideo}/>
            </video>
          </div>
        </div>
        <div className="step">
          <div className='step-text'>
            <h3>{t('stepFour')}</h3>
            <p>{t('stepFourInfo')}</p>
          </div>
          <div className='step-image'>
          <video autoPlay muted>
              <source src={StepFourVideo}/>
            </video>
          </div>
        </div>
      </section>
      <section className="features">
        <h2>{t('features')}</h2>
        <div className='features-showcase'>
          <div className='features-row'>
            <p>{t('features1')}</p>
            <p>{t('features2')}</p>
            <p>{t('features3')}</p>
          </div>
          <div className='features-row'>
            <p>{t('features4')}</p>
            <p>{t('features5')}</p>
            <p>{t('features6')}</p>
          </div>
        </div>
      </section>  
    </div>
  );
};

export default HowItWorks;

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './AboutUs.css';

const AboutUs = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const elements = document.querySelectorAll('.info-box-inner, .timeline');

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
    <div className="about-us-container">
      <section className='image-display'>
        <h1>{t('aboutUsH1')}</h1>
      </section>
      <section className="intro">
        <h2>{t('ultimate')}</h2>
        <h3>{t('launch')}</h3>
        <div className='info-box'>
          <div className='info-box-inner'>
            <p className='number'>10,030</p>
            <p>{t('info1')}</p>
          </div>
          
          <div className='info-box-inner'>
            <p className='number'>6</p>
            <p>{t('info2')}</p>
          </div>

          <div className='info-box-inner'>
            <p className='number'>24/7</p>
            <p>{t('info3')}</p>
          </div>
        </div>
        <div className='info-box'>
          <div className='info-box-inner'>
            <p className='number'>99%</p>
            <p>{t('info4')}</p>
          </div>
          
          <div className='info-box-inner'>
            <p className='number'>5</p>
            <p>{t('info5')}</p>
          </div>

          <div className='info-box-inner'>
            <p className='number'>24/7</p>
            <p>{t('info6')}</p>
          </div>
        </div>
      </section>
      <section className='roadmap'>
        <h2>CampusNav {t('roadmap')}</h2>
        <div className='timeline'>
          <div className='timeline-year'>
            <h3>2024 Q1</h3>
          </div>
          <div className='timeline-list'>
            <h4>{t('roadmap1')}</h4>
            <h4>{t('roadmap2')}</h4>
            <h4>{t('roadmap3')}</h4>
            <h4>{t('roadmap4')}</h4>
          </div>
        </div>
      </section>
      <section className='roadmap'>
        <div className='timeline'>
          <div className='timeline-year'>
            <h3>2024 Q4</h3>
          </div>
          <div className='timeline-list'>
            <h4>{t('roadmap5')}</h4>
            <h4>{t('roadmap6')}</h4>
            <h4>{t('roadmap7')}</h4>
            <h4>{t('roadmap8')}</h4>
          </div>
        </div>
      </section>
      <section className='roadmap'>
        <div className='timeline'>
          <div className='timeline-year'>
            <h3>2025 Q1</h3>
          </div>
          <div className='timeline-list'>
            <h4>{t('roadmap9')}</h4>
            <h4>{t('roadmap10')}</h4>
            <h4>{t('roadmap11')}</h4>
            <h4>{t('roadmap12')}</h4>
          </div>
        </div>
      </section>
      <section className='roadmap'>
        <div className='timeline'>
          <div className='timeline-year'>
            <h3>2025 ~</h3>
          </div>
          <div className='timeline-list'>
            <h4>{t('roadmap13')}</h4>
            <h4>{t('roadmap14')}</h4>
            <h4>{t('roadmap15')}</h4>
            <h4>{t('roadmap16')}</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

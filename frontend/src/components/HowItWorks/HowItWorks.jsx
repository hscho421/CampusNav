// src/components/HowItWorks/HowItWorks.js
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './HowItWorks.css';
import StepOneImage from '../../assets/step-1.png';
import StepTwoImage from '../../assets/step-2.png';
import StepFourImage from '../../assets/step-4.png';

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
        <h1>Getting Started with CampusNav</h1>
      </section>
      <section className='intro'>
        <h2>
          Embarking on your journey with CampusNav is simple and straightforward. Our system is designed to guide you through each step, ensuring a seamless setup process. 
          Follow these easy steps to unlock the full potential of CampusNav, helping you navigate your campus with confidence and precision.
        </h2>
      </section>
      <section className="step-container">
        <div className="step">
          <div className='step-text'>
            <h3>Step 1: Enter Your University</h3>
            <p>Begin by entering the name of your university. CampusNav will fetch the coordinates to provide accurate mapping services tailored to your campus.</p>
          </div>
          <div className='step-image'>
            <img src={StepOneImage} alt="Step 1" />
          </div>
        </div>
        <div className="step">
          <div className='step-text'>
            <h3>Step 2: Add Your Courses</h3>
            <p>Input your course schedule, including building names and room numbers. This allows CampusNav to create a personalized map just for you, making it easy to locate all your classes.</p>
          </div>
          <div className='step-image'>
            <img src={StepTwoImage} alt="Step 2" />
          </div>
        </div>
        <div className="step">
          <div className='step-text'>
            <h3>Step 3: View Your Schedule</h3>
            <p>Review your course schedule in a convenient table format. This overview makes it easy to see your classes at a glance, ensuring you never miss a session.</p>
          </div>
          <div className='step-image'>
            <img src={StepTwoImage} alt="Step 3" />
          </div>
        </div>
        <div className="step">
          <div className='step-text'>
            <h3>Step 4: Calculate Routes</h3>
            <p>Click on the "Calculate Routes" button to get the best walking routes between your classes. CampusNav ensures you never get lost on campus and always find the quickest path.</p>
          </div>
          <div className='step-image'>
            <img src={StepFourImage} alt="Step 4" />
          </div>
        </div>
      </section>
      <section className="features">
        <h2>Features</h2>
        <div className='features-showcase'>
          <div className='features-row'>
            <p>Accurate campus maps</p>
            <p>Customizable course schedules</p>
            <p>Real-time route calculations</p>
          </div>
          <div className='features-row'>
            <p>User-friendly interface</p>
            <p>Points of interest highlighting (e.g., cafes, libraries, gyms)</p>
            <p>Virtual campus exploration</p>
          </div>
        </div>
      </section>  
    </div>
  );
};

export default HowItWorks;

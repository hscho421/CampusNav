// src/components/HowItWorks/HowItWorks.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './AboutUs.css';

const HowItWorks = () => {

  const { t } = useTranslation();

  return (
    <div className="about-us-container">
      <section className="steps">
        <h2>Getting Started with CampusNav</h2>
        <div className="step">
          <h3>Step 1: Enter Your University</h3>
          <p>Begin by entering the name of your university. CampusNav will fetch the coordinates to provide accurate mapping services tailored to your campus.</p>
        </div>
        <div className="step">
          <h3>Step 2: Add Your Courses</h3>
          <p>Input your course schedule, including building names and room numbers. This allows CampusNav to create a personalized map just for you, making it easy to locate all your classes.</p>
        </div>
        <div className="step">
          <h3>Step 3: View Your Schedule</h3>
          <p>Review your course schedule in a convenient table format. This overview makes it easy to see your classes at a glance, ensuring you never miss a session.</p>
        </div>
        <div className="step">
          <h3>Step 4: Calculate Routes</h3>
          <p>Click on the "Calculate Routes" button to get the best walking routes between your classes. CampusNav ensures you never get lost on campus and always find the quickest path.</p>
        </div>
      </section>
      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Accurate campus maps</li>
          <li>Customizable course schedules</li>
          <li>Real-time route calculations</li>
          <li>User-friendly interface</li>
        </ul>
      </section>
        
      <section className="footer">
        <h2>Need Help?</h2>
        <p>If you encounter any issues or have questions, please visit our <a href="#">Support Page</a> or contact us at support@campusnav.com. We're here to help!</p>
      </section>    
    </div>
  );
};

export default HowItWorks;
    
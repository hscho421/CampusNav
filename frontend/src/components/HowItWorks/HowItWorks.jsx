// src/components/HowItWorks/HowItWorks.js
import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <div className="how-it-works-container">
      <h1>How CampusNav Works</h1>
      <section className="intro">
        <h2>Welcome to CampusNav!</h2>
        <p>CampusNav is your ultimate campus companion, designed to help you navigate your university with ease. From finding your classrooms to calculating the best walking routes, CampusNav has got you covered.</p>
      </section>
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
      <section className="faqs">
        <h2>Frequently Asked Questions (FAQs)</h2>
        <div className="faq">
          <h3>How do I enter my university?</h3>
          <p>Simply start typing the name of your university in the search bar, and select it from the dropdown menu that appears.</p>
        </div>
        <div className="faq">
          <h3>Can I edit my course schedule after entering it?</h3>
          <p>Yes, you can easily update your course schedule by going to the "My Schedule" section and making the necessary changes.</p>
        </div>
        <div className="faq">
          <h3>What if I have back-to-back classes in different buildings?</h3>
          <p>CampusNav calculates the quickest routes to ensure you make it to your next class on time, even if you have back-to-back sessions in different locations.</p>
        </div>
        <div className="faq">
          <h3>How accurate are the walking routes?</h3>
          <p>Our routes are based on real-time data and the most efficient paths on your campus, providing highly accurate walking directions.</p>
        </div>
      </section>
      <section className="footer">
        <h2>Need Help?</h2>
        <p>If you encounter any issues or have questions, please visit our <a href="#">Support Page</a> or contact us at support@campusnav.com. We're here to help!</p>
      </section>    
    </div>
  );
};

export default HowItWorks;
    
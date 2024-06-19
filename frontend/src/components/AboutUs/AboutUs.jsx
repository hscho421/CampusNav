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
    <div className="how-it-works-container">
      <section className='image-display'>
        <h1>An integrated navigation system to help you get to your class on time</h1>
      </section>
      <section className="intro">
        <h2>CampusNav is your ultimate campus companion, designed to help you navigate your university with ease. From finding your classrooms to calculating the best walking routes, CampusNav has got you covered.</h2>
        <h3>
          Since its launch, CampusNav has been designed with the goal of better serving university students around the world. Starting with essential navigation features, it aims to help students find their classrooms and calculate the best walking routes on campus. 
          In the future, CampusNav plans to expand its capabilities to include real-time updates on campus events and notifications for changes in class schedules. Our vision is to create a seamless university experience where students can focus on their education 
          without the hassle of navigating large campuses. Join us as we embark on this journey to make campus life simpler and more efficient.
        </h3>
        <div className='info-box'>
          <div className='info-box-inner'>
            <p className='number'>10,030</p>
            <p>10,030 universities in database</p>
          </div>
          
          <div className='info-box-inner'>
            <p className='number'>6</p>
            <p>6 languages supported</p>
          </div>

          <div className='info-box-inner'>
            <p className='number'>24/7</p>
            <p>99.99% Google Maps API uptime</p>
          </div>
        </div>
        <div className='info-box'>
          <div className='info-box-inner'>
            <p className='number'>99%</p>
            <p>99% data accuracy via Google Maps</p>
          </div>
          
          <div className='info-box-inner'>
            <p className='number'>5</p>
            <p>Major updates planned anually</p>
          </div>

          <div className='info-box-inner'>
            <p className='number'>24/7</p>
            <p>24/7 customer service available</p>
          </div>
        </div>
      </section>
      <section className='roadmap'>
        <h2>CampusNav Roadmap</h2>
        <div className='timeline'>
          <div className='timeline-year'>
            <h3>2024 Q1</h3>
          </div>
          <div className='timeline-list'>
            <h4>Initial Release</h4>
            <h4>PDF Export Tool</h4>
            <h4>Google Maps API</h4>
            <h4>Geocoding API</h4>
          </div>
        </div>
      </section>
      <section className='roadmap'>
        <div className='timeline'>
          <div className='timeline-year'>
            <h3>2024 Q4</h3>
          </div>
          <div className='timeline-list'>
            <h4>10+ languages support</h4>
            <h4>AI Chatbot</h4>
            <h4>Map API native language</h4>
            <h4>Additional Transportation</h4>
          </div>
        </div>
      </section>
      <section className='roadmap'>
        <div className='timeline'>
          <div className='timeline-year'>
            <h3>2025 Q1</h3>
          </div>
          <div className='timeline-list'>
            <h4>Mobile Application</h4>
            <h4>User Authentication</h4>
            <h4>Integrate campus maps</h4>
            <h4>Map 3D buildings</h4>
          </div>
        </div>
      </section>
      <section className='roadmap'>
        <div className='timeline'>
          <div className='timeline-year'>
            <h3>2025 ~</h3>
          </div>
          <div className='timeline-list'>
            <h4>Cloud data storage</h4>
            <h4>University partnerships</h4>
            <h4>Course registration integration</h4>
            <h4>Support beyond universities</h4>
          </div>
        </div>
      </section>
      <section className="footer">
        <h2>Need Help?</h2>
        <p>If you encounter any issues or have questions, please visit our <a href="#">Support Page</a> or contact us at support@campusnav.com. We're here to help!</p>
      </section>    
    </div>
  );
};

export default AboutUs;

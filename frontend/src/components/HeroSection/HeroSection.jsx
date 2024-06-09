import React from "react";
import screenDisplay from "../../assets/screenDisplay.svg"
import './HeroSection.css'

const HeroSection = () => {
    return(
      <section className="hero-section">

        <div className="hero-content">
          <h1>Navigate Your Campus with Ease</h1>
          <p>Discover the quickest routes to your classes, dorms, and favorite spots on campus. 
            CampusNav makes finding your way around simple and stress-free.</p>
          <a href="#get-started" className="main-button">
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
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
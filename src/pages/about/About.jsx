import React from 'react';
import "./About.css";
import AboutImg from "../../assets/two_in_cage2.jpg";

const About = () => {
  return (
    <div className='about-div'>
      <h1 className='title_about'>About Us</h1>
      <div className='about-container'>
        <img className="about-image" src={process.env.PUBLIC_URL + AboutImg} alt='Caged animals' />
        <div className='about-text'>
          <p>At Shorty's Rescue, we are driven by a simple belief: no one should have to endure a life of neglect and abandonment. Our no-kill dog rescue shelter stands as a testament to our unwavering commitment — a commitment to providing a haven filled with love, compassion, and dignity for those left behind. Each wagging tail and hopeful gaze fuels our dedication to offering a second chance at life. We envision a world where no dog is left behind, and with unwavering dedication, we strive to create a haven where each pup finds a forever home filled with warmth and care. Our mission is clear: to transform lives, one rescue at a time, creating a ripple effect of compassion far beyond the walls of our shelter.</p>
        </div>
      </div>
    </div>
  )
}

export default About
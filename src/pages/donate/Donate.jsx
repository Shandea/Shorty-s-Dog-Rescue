import React from 'react';
import DonationForm from '../../components/DonationForm';
import "./Donate.css";

const Donate = () => {
  return (
    <div className='donation-container'>
      <div className='donate-content-div'>
      <div className='title-donate'>
        <h1>Get Involved</h1></div>
        <p>While we greatly appreciate donations as they play a vital role in covering our operational expenses and facilitating no-cost adoptions, we want to emphasize that they are not mandatory. Our primary goal is to ensure that every individual or family has the opportunity to provide a loving home for our animals. Your contributions help sustain our mission, but we warmly welcome all prospective adopters, irrespective of their ability to make a financial donation. We believe in inclusivity and strive to make the adoption process accessible to everyone who shares our commitment to providing a safe and caring environment for our beloved animals.</p>
        <div className='donate-address-div'>
          <p>To mail or drop off donations:<br />
            Shorty's Rescue<br />
            5454 W Lewis Ave<br /> 
            Phoenix, AZ 85035
          </p>
        </div>
      </div>
      <DonationForm />
    </div>
  )
}

export default Donate

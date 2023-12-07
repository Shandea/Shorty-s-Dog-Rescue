import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Admin.css';

const Admin = () => {
  const [adoptData, setAdoptData] = useState([]);
  const [donateData, setDonateData] = useState([]);

  useEffect(() => {
    // Fetch adoption data
    axios.get('http://localhost:4000/forms/adoption')
      .then(response => setAdoptData(response.data))
      .catch(error => console.error('Error fetching adoption data:', error));

    // Fetch donation data
    axios.get('http://localhost:4000/forms/donation')
      .then(response => setDonateData(response.data))
      .catch(error => console.error('Error fetching donation data:', error));
  }, []); // Empty dependency array to fetch data once when the component mounts

  return (
    <div className="adminWholePage">
      <h1 className='welcomeTitle'>Welcome Admin!</h1>

      <div className='adoptSection'>
        <h2>Adoption Data:</h2>
        <div className='adoptRow'>
          {adoptData.map((data, index) => (
            <div className='adoptCard' key={index}>
                <p>Dog Name: {data.dogName}</p>
                <p>First Name:{data.firstName}</p>
                <p>Last Name:{data.lastName}</p>
                <p>Phone Number:{data.phoneNumber}</p>
                <p>Email:{data.email}</p>
                <p>Date:{data.date}</p>

                
                

            </div>
          ))}
        </div>
      </div>

      <div className='donationSection'>
        <h2>Donation Data:</h2>
        <div className='donationRow'>
          {donateData.map((data, index) => (
            <div className='donationCard' key={index}>
                
                <p>Full Name:{data.fullName}</p>
                <p>Email:{data.email}</p>
                <p>Credit Card Number:{data.creditCardNumber}</p>
                <p>Expiration Date:{data.expirationDate}</p>
                <p>Security Code:{data.securityCode}</p>
                <p>Zip Code:{data.zipCode}</p>

                
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
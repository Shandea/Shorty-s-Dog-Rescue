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
      <h1>Welcome Admin!</h1>

      <div>
        <h2>Adoption Data:</h2>
        <ul>
          {adoptData.map((data, index) => (
            <li key={index}>{/* Render adoption data here */}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Donation Data:</h2>
        <ul>
          {donateData.map((data, index) => (
            <li key={index}>{/* Render donation data here */}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Admin;
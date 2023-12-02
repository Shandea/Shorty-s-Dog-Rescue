import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./DonationForm.css";

const DonationForm = () => {
  const initialFormData = {
    fullName: '',
    email: '',
    amount: '',
    creditCardNumber: '',
    expirationDate: '',
    securityCode: '',
    zipCode: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      const delay = setTimeout(() => {
        setSubmitted(false);
      }, 50000); // Adjust the duration as needed for "Thank You" msg.
      return () => clearTimeout(delay);
    }
  }, [submitted]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'expirationDate') {
      // Ensure only numeric input and format as MM/YYYY
      const sanitizedValue = value.replace(/[^\d/]/g, '');
      const maxLength = 7; // MM/YYYY has a length of 7 characters
      const truncatedValue = sanitizedValue.slice(0, maxLength);

      setFormData((prevData) => ({
        ...prevData,
        [name]: truncatedValue,
      }));
      
    } else if (name === 'creditCardNumber') {
      // For "Credit Card Number", ensure only numeric input and limit to 16 characters
      const numericValue = value.replace(/[^\d]/g, '');
      const maxLength = 16;
      const truncatedValue = numericValue.slice(0, maxLength);

      setFormData((prevData) => ({
        ...prevData,
        [name]: truncatedValue,
      }));
    } else if (name === 'securityCode') {
      // For "Security Code", ensure only numeric input and limit to 3 characters
      const numericValue = value.replace(/[^\d]/g, '');
      const maxLength = 3;
      const truncatedValue = numericValue.slice(0, maxLength);

      setFormData((prevData) => ({
        ...prevData,
        [name]: truncatedValue,
      }));
    } else {
      // For other fields, update the state without restrictions
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setSubmitted(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const apiUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:4000";
      const response = await axios.post(apiUrl + "/forms/donation", {
        formData,
      });

      console.log('Form submitted:', formData);
      console.log('Server Response:', response.data);

      resetForm();

    } catch (error) {
      console.error("Error submitting form data:", error)
    }
  };

  return (
    <form method="post" onSubmit={handleSubmit} className="donation-form">
      <h2>Donation Form</h2>
      <div className="form-group">
        <label htmlFor='fullName'>
          Full Name:
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Your full name"
            required />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor='email'>
          Email: ( Optional For Receipt )
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your email address" />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor='amount'>
          Amount to Donate ($):
          <input
            type="number"
            name="amount"
            id="amount"
            value={formData.amount}
            onChange={handleInputChange}
            placeholder="Enter amount"
            required
            min="0"
            max="10000"
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor='creditCardNumber'>
          Credit Card Number:
          <input
            type="tel"
            name="creditCardNumber"
            id="creditCardNumber"
            value={formData.creditCardNumber}
            onChange={handleInputChange}
            placeholder="Credit card number"
            required />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor='expirationDate'>
          Expiration Date:
          <input
            type="tel"
            name="expirationDate"
            id="expirationDate"
            value={formData.expirationDate}
            onChange={handleInputChange}
            placeholder="MM/YYYY"
            pattern="(0[1-9]|1[0-2])\/[0-9]{4}" // Format: MM/YYYY
            required />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor='securityCode'>
          Security Code:
          <input
            type="tel"
            name="securityCode"
            id="securityCode"
            value={formData.securityCode}
            onChange={handleInputChange}
            placeholder="CVV"
            pattern="[0-9]{3}" // CVV typically has 3 digits
            required />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor='zipCode'>
          Zip Code:
          <input
            type="text"
            name="zipCode"
            id="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
            placeholder="Your zip code"
            required />
        </label>
      </div>
      <div className="form-group submit-div">
        <button type="submit">Submit Donation</button>
        {submitted && <p className="thank-you-message">Thank You!</p>}
      </div>
    </form>
  );
}

export default DonationForm;

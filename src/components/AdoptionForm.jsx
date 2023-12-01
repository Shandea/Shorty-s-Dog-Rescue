import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./AdoptionForm.css";

const AdoptionForm = () => {
  const initialFormData = {
    nameOfDog: "",
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    signature: '',
    date: '',
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

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setSubmitted(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const apiUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:4000";
      const response = await axios.post(apiUrl + "/forms/adoption", {
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
    <form method='post' onSubmit={handleSubmit} className="adoption-form">
      <h2>Adoption Interest Application</h2>
      <div className="form-group">
        <label htmlFor='nameOfDog'>
          Dog Interested In:
          <input 
          type="text" 
          name="nameOfDog" 
          id="nameOfDog" 
          value={formData.nameOfDog} 
          onChange={handleInputChange} 
          placeholder="Animal's name" 
          required />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor='firstName'>
          First Name:
          <input 
          type="text" 
          name="firstName" 
          id="firstName" 
          value={formData.firstName} 
          onChange={handleInputChange} 
          placeholder="Your first name" 
          required />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor='lastName'>
          Last Name:
          <input 
          type="text" 
          name="lastName" 
          id="lastName" 
          value={formData.lastName} 
          onChange={handleInputChange} 
          placeholder="Your last name" 
          required />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor='phone'>
          Phone:
          <input 
          type="tel" 
          name="phone" 
          id="phone" 
          value={formData.phone} 
          onChange={handleInputChange} 
          placeholder="Your phone number" 
          required />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor='email'>
          Email:
          <input 
          type="email" 
          name="email" 
          id="email" 
          value={formData.email} 
          onChange={handleInputChange} 
          placeholder="Your email address" 
          required />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor='signature'>
          Your Signature: ( Agreement For Spay / Neuter )
          <input 
          type="text" 
          name="signature" 
          id="signature" 
          value={formData.signature} 
          onChange={handleInputChange} 
          placeholder="Your full name" 
          required />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor='date'>
          Date:
          <input 
          type="date" 
          name="date" 
          id="date" 
          value={formData.date} 
          onChange={handleInputChange} 
          required />
        </label>
      </div>
      <div className="form-group submit-div">
        <button type="submit">Submit Application</button>
        {submitted && <p className="thank-you-message">Thank You!</p>}
      </div>
    </form>
  );
}

export default AdoptionForm;

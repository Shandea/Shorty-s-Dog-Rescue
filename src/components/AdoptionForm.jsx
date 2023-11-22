import React, { useState, useEffect } from 'react';
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
      // Delay the rendering of the "Thank You!" message for a short duration
      const delay = setTimeout(() => {
        setSubmitted(false);
      }, 50000); // Adjust the duration as needed
      
      // Clear the timeout if the component unmounts before the delay
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling form submission here
    console.log('Form submitted:', formData);

    // Set the submitted state to true
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit} className="adoption-form">
      <h2>Adoption Interest Application</h2>
      <div className="form-group">
        <label>
          Dog Interested In:
          <input type="text" name="nameOfDog" value={formData.nameOfDog} onChange={handleInputChange} placeholder="Animal's name" required />
        </label>
      </div>
      <div className="form-group">
        <label>
          First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="Your first name" required />
        </label>
      </div>
      <div className="form-group">
        <label>
          Last Name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Your last name" required />
        </label>
      </div>
      <div className="form-group">
        <label>
          Phone:
          <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Your phone number" required />
        </label>
      </div>
      <div className="form-group">
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Your email address" required />
        </label>
      </div>
      <div className="form-group">
        <label>
          Your Signature: ( Agreement For Spay / Neuter )
          <input type="text" name="signature" value={formData.signature} onChange={handleInputChange} placeholder="Your full name" required />
        </label>
      </div>
      <div className="form-group">
        <label>
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleInputChange} required />
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

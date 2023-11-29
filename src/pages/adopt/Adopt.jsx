import React from 'react';
import AdoptionForm from '../../components/AdoptionForm';
import AdoptImg from "../../assets/adopt_us.png";
import "./Adopt.css"

const Adopt = () => {
  return (
    <div className='adoption-container'>
      <div className='adopt-content-div'>
        <div className='title-adopt'>
        <h1 >Adopt Me</h1>
        </div>
        <img className="adopt-image" src={process.env.PUBLIC_URL + AdoptImg} alt='Caged animals' />
        <p>Thank you for you interest in Shorty's Rescue. We keep our adoption process simple and at no cost to you. Just fill out the adoption interest application and we will contact you for the rest of the process.</p>
      </div>
      <AdoptionForm />
    </div>
  )
}

export default Adopt;

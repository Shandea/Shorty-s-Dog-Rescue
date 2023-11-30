const { Adopt, Donate } = require('../models');

// Controller function for fetching adoption form data 
async function getAdoptData(req, res) {
  try {
    const adoptData = await Adopt.find();
    res.status(200).json(adoptData);
  } catch (error) {
    console.error('Error fetching Adoption Form data:', error);
    console.error(error.stack);  // Log the stack trace
    res.status(500).json({ error: 'Internal server error', message: error.message });
  }
}

// Controller function for fetching donation form data
async function getDonateData(req, res) {
  try {
    const donateData = await Donate.find();
    res.status(200).json(donateData);
  } catch (error) {
    console.error('Error fetching Donation Form data:', error);
    console.error(error.stack);  // Log the stack trace
    res.status(500).json({ error: 'Internal server error', message: error.message });

  }
}

// Controller function for submitting adoption form data
async function submitAdoptData(req, res) {
  try {
    const formData = req.body.formData;

    const newAdoptData = new Adopt({
      dogName: formData.nameOfDog,
      firstName: formData.firstName,
      lastName: formData.lastName,
      phoneNumber: formData.phone,
      email: formData.email,
      signature: formData.signature,
      date: formData.date,
    });

    await newAdoptData.save();

    res.status(201).json({ message: 'Adoption form data submitted successfully' });
  } catch (error) {
    console.error('Error submitting adoption form data:', error);
    res.status(500).json({ error: 'Internal server error', message: error.message });

  }
}

// Controller function for submitting donation form data
async function submitDonateData(req, res) {
  try {
    const formData = req.body.formData;

    const newDonateData = new Donate({
      fullName: formData.fullName,
      email: formData.email,
      amount: formData.amount,
      creditCardNumber: formData.creditCardNumber,
      expirationDate: formData.expirationDate,
      securityCode: formData.securityCode,
      zipCode: formData.zipCode,
    });

    await newDonateData.save();

    res.status(201).json({ message: 'Donation form data submitted successfully' });
  } catch (error) {
    console.error('Error submitting donation form data:', error);
    res.status(500).json({ error: 'Internal server error', message: error.message });
  }
}

module.exports = {
  getAdoptData,
  getDonateData,
  submitAdoptData,
  submitDonateData,
};
// const Form1DataModel = require('../models/Form1DataModel');
// const Form2DataModel = require('../models/Form2DataModel');

//update name to actual model name
// const { Form1DataModel, Form2DataModel } = require("../db/models"); 

// Controller function for fetching data related to Form 1
exports.getForm1Data = async (req, res) => {
  try {
    // const form1Data = await Form1DataModel.find();
    // res.status(200).json(form1Data);
  } catch (error) {
    console.error('Error fetching Form 1 data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller function for fetching data related to Form 2
exports.getForm2Data = async (req, res) => {
  try {
    // const form2Data = await Form2DataModel.find();
    // res.status(200).json(form2Data);
  } catch (error) {
    console.error('Error fetching Form 2 data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
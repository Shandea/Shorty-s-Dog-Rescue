const router = require("express").Router();
const { formDataController }= require("../controllers");

// Define API endpoints for fetching data 
router.get('/forms/adoption', formDataController.getAdoptData);
router.get('/forms/donation', formDataController.getDonateData);


// Define API endpoint for submitting data
router.post('/forms/adoption', formDataController.submitAdoptData);
router.post('/forms/donation', formDataController.submitDonateData);

module.exports = router;
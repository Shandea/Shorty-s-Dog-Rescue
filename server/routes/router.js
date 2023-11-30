const router = require("express").Router();
const FormDataController = require("../controllers/FormDataController");

// Define API endpoints for fetching data change to actual model names
router.get('/forms/form1Data', FormDataController.getForm1Data);
router.get('/forms/form2Data', FormDataController.getForm2Data);

module.exports = router;
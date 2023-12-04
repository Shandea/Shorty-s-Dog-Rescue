const express = require('express');
const app = express();
const cors = require("cors");
const router = require("./routes/router");
const connectDB = require('./db/index.js'); // Import the database connection function

const config = require('./utils/config.js')


// Define routes and middleware here
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.use(cors(config.cors));
app.use("/", router);

connectDB();

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

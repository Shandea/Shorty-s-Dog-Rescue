const express = require('express');
const app = express();
const cors = require("cors");
const router = require("./routes/router");
const connectDB = require('./db/index.js');
const config = require('./utils/config.js')

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors(config.cors));
app.use("/", router);

connectDB();

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

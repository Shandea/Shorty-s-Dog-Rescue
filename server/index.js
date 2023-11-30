const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/router")

const app = express();

// Define routes and middleware here

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccsessStatus: 200

}

app.use(cors(corsOptions));
app.use("/", router)



const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// const server = app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

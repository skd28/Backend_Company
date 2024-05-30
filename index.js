require('dotenv').config();
const express = require('express')
const app = express();
const router = require('./router/cyber-router')
const connectToDb = require('./utils/db')
const cors  = require("cors")

app.use(cors())

app.use(express.json())

app.use("/api",router)

const PORT = 5000;

connectToDb()
.then((
    app.listen(PORT, ()=>{
        console.log(`server is running at port:- `,PORT)
    })
))
.catch((error) => {
    console.error('Error starting server:', error);
    process.exit(1); // Exit with an error code
  });

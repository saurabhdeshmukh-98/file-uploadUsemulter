const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config();
const router=require('./router/router')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/',router)

async function run() {
    try {
      app.listen(process.env.PORT, () => {
        console.log(`sever is running on port no  : ${process.env.PORT}`);
      });
    } catch (err) {
      console.log(err);
    }
  }
  run();
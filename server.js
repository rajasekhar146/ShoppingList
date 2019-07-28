const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const Items = require('./routes/api/item')

const app = express();
 
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
    .then(()=> console.log('mongoDb connected...'))
    .catch(err => console.log(err));

app.use('/api/items', Items)
const port = process.env.PORT || 5000;
 app.listen(port, () => console.log(`server started on ${port}`));
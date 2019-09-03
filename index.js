const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config/keys');
const mongoose = require('mongoose');

const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());
const Registration = require('./models/Registration');
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://chatbotDB:petpal123@cluster0-0qztr.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {useNewUrlParser: true});
// client.connect(err =>
// {
//     const collection = client.db("ChatBot_training").collection("medicines");
//     console.log("Connected correctly to server");
//     client.close();
// });


require('./routes/dialogFlowRoutes')(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT);

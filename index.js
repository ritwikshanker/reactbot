const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config/keys');
const mongoose = require('mongoose');
const connect = mongoose.connect(config.mongoURI, {useNewUrlParser: true});

app.use(bodyParser.json());
const Dishes = require('./models/Registration');
connect.then((db) =>
{
    console.log("Connected correctly to server");
}, (err) =>
{
    console.log(err);
});

require('./routes/dialogFlowRoutes')(app);
// console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS);
const PORT = process.env.PORT || 5000;
app.listen(PORT);

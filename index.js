const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config/keys');
const mongoose = require('mongoose');
require('./models/Registration');
const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());
mongoose.Promise = global.Promise;

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://localhost:27017/ChatBot_training";
const client = new MongoClient(uri, {useNewUrlParser: true});
client.connect(err =>
{
    console.log("Connected correctly to server");
});


require('./routes/dialogFlowRoutes')(app);
require('./routes/fulfillmentRoutes')(app);

if (process.env.NODE_ENV === 'production')
{
    // js and css files
    app.use(express.static('client/build'));

    // index.html for all page routes
    const path = require('path');
    app.get('*', (req, res) =>
    {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://chatbotDB:petpal123@cluster0-0qztr.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {useNewUrlParser: true});
// client.connect(err =>
// {
//     const collection = client.db("ChatBot_training").collection("medicines");
//     console.log("Connected correctly to server");
//     client.close();
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT);
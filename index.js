const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());


require('./routes/dialogFlowRoutes')(app);
// console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS);
const PORT = process.env.PORT || 5000;
app.listen(PORT);

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./middleware/authmiddleware');
const airtimeRoutes =  require('./api/routes/airtime');

const port = process.env.PORT || 3000;
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(authMiddleware);


app.use('/airtime', airtimeRoutes);

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
    
});


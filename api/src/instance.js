const axios = require('axios');


const instance = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {'Content-type': 'application/json'}
});




module.exports = instance;

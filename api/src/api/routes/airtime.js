const express = require('express');
const instance = require('../../instance');
const { paths } = require('../../constants');

const router = express.Router();

router.get('/info/:sid',async (req,res,next)=>{
    const id = req.params.sid;

    const response = instance.get(`${paths.airtime.info + id}`);

    console.log(response);

    res.status(200).json({
        message:"Handling GET request to /products"
    })
})

module.exports = router;
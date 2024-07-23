const express = require('express');
const instance = require('../../instance');
const { paths } = require('../../constants');

const router = express.Router();

router.get('/info/:sid',async (req,res)=>{
    const id = req.params.sid;

    console.log(id);
    
    const response = await instance.get(`${paths.data.info + id}`);
    console.log(response.data);


    res.status(200).json(response.data)
})

router.post('/topup/:sid',async (req,res)=>{
    const id = req.params.sid;

    const { product_id, denomination, send_sms, sms_text, customer_reference } = req.body;

    try {
        const response = await instance.post(`${paths.data.topup}${id}`, {
            product_id,
            denomination,
            send_sms,
            sms_text,
            customer_reference,
        });


        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error Topup:', error);
        res.status(500).json({ error: error.message });
    }
})

module.exports = router;
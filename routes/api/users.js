const express =require('express');
const router =express.Router();

router.get('/test',(req,res)=>res.json({
    mgs:"user works"
}));

module.exports=router
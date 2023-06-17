const express = require("express");
const {createUser} = require("../studyCases/userCase");
const router = express.Router();


///create user
router.post("/",async(req,res)=>{
    try{
        const user = await createUser(req.body)
        res.status(200)
        res.json({
            success: true,
            data: user
          })
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports = router;
const express = require("express");
const {createRegister,listarUsers} = require("../studyCases/userCase");
const router = express.Router();

///create user
router.post("/",async(req,res)=>{

  try{
    const userCosntruido = await createRegister(req.body);
    res.json({
      success: true,
      data: userCosntruido
    })
  }catch(e){
      res.status(500).json(e)
  }
  });
  


  
///list Users
router.get("/", async (req, res) => {
    try {
      const users = await listarUsers();
      res.json({
        success: true,
        data: users
      })
    }catch(err) {
      res.status(400);
      res.json({
        success: false,
        message: err.users
      })
    }
  })


module.exports = router;
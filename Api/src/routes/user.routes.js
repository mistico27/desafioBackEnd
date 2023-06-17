const express = require("express");
const {createUser,listarUsers} = require("../studyCases/userCase");
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
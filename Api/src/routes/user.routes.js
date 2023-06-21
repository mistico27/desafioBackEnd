const express = require("express");
const {createRegister,listarUsers,getUser} = require("../useCases/userCase");
const auth =require("../middlewares/Auth.middleware");
const router = express.Router();

///create user
router.post("/", async (req, res) => {
  try {
    const Usercreated = await createRegister(req.body);
    res.status(201);
    res.json({
      success: true,
      data: Usercreated
    })
  }catch(err) {
    res.status(err.status || 500).json({
      success: false,
      message: err.message
    })
  }
})


///list Users
router.get("/", async (req, res) => {
    try {
      const users = await listarUsers(req.query);
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

// Obtener usuario
router.get("/:id",auth,async(req,res)=>{
  try{ 
  const users =await getUser(req.params.id);
    res.json({
      success:true,
      data:users
    })
  }catch(e){
    res.status(500);
    res.json({
      success: false,
      message: e.message
    });
  } 
  })

module.exports = router;
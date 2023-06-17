const express = require("express");
const {loginSignUp} = require("../studyCases/AuthCases");
const {listarUsers}=require("../studyCases/userCase")
const {auth}= require("../middlewares/Auth.middleware");

const router = express.Router();

router.post("/",async(req,res)=>{
    try{
      const findUser = await loginSignUp(req.body.email, req.body.password);
      res.status(200);
      res.json({
        success: true,
        data: findUser
      })
    }catch(e){
        res.status(500);
        res.json({
          success: false,
          message: "invalid Data"
        })
    }
    });


router.get("/",async(req,res)=>{
        try{ 
        const users =await listarUsers(req.params)
          res.json({
            success:true,
            data:users
          })
        }catch(e){
          res.status(500);
          res.json({
            success: false,
            message: "invalid Data"
          });
        } 
        })
        
///get Id        
router.get("/:id",auth,async(req,res)=>{
          try{ 
          const users =await get(req.params.id);
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
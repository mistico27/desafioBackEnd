const express = require("express");
const {listarPost,createPost,getPostbyId,deletePost} = require("../studyCases/postCase");
const authDelete =require("../middlewares/DeleteAuth.middleware");

const router = express.Router();


///create post
router.post("/",async(req,res)=>{
    try{
        const post = await createPost(req.body)
        res.status(200)
        res.json({
            success: true,
            data: post
          })
    }catch(err){
      res.status(err.status || 500);
      res.json({
        success: false,
        message: err.users
      })
    }
})

///list post
router.get("/", async (req, res) => {
    try {
      const posts = await listarPost();
      res.json({
        success: true,
        data: posts
      })
    }catch(err) {
      res.status(err.status || 500);
      res.json({
        success: false,
        message: err.users
      })
    }
  })

///get Post by ID
router.get("/:id", async (req, res) => {
  try {
    const newPost = await getPostbyId(req.params.id);
    if(!newPost) {
      const error = new Error("Post not found");
      error.status = 404; // not found
      throw error; // return
    }
    res.json({
      success: true,
      data: newPost
    })
  } catch (err) {
    res.status(err.status || 500);
    res.json({
      success: false,
      message: err.message
    })
  }
})

///eliminar Post

router.delete("/:id",authDelete ,async (req, res) => {
  try {
    const post = await deletePost(req.params.id);
    res.json({
      success: true,
      message:"post Eliminado exitosamente"
    })
  } catch (err) {
    res.status(err.status || 500);
    res.json({
      success: false,
      message: err.message
    })
  }
})

module.exports = router;
const express = require("express");
const {listarPost,createPost,getPostbyId,deletePost,updatePost} = require("../useCases/postCase");
const auth=require("../middlewares/Auth.middleware");


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

router.delete("/:id",auth ,async (req, res) => {
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
///update a post
router.put('/:id',auth, async(req,res)=> {
  try {
    const updatedPost = await updatePost(req.params.id, req.body);    
    res.json({
      success: true,
      message:"post editado exitosamente",
      data:updatedPost
  })}
  catch (err){
      res.status(err.status || 500);
      res.json({
        success: false,
        message: err.message
      })}
});

module.exports = router;
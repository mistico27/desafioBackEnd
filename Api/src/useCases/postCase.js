const Post = require("../Models/Post.model");
///Crear Post
const createPost= (data) => {
    const NewPost = Post.create(data);
    return NewPost;
}
///listar los post
const listarPost = () => {
    const posts = Post.find();
    return posts;
  
  } 
///get Posts by ID
const getPostbyId = (id) => {
    const postFounded = Post.findById(id) 
    return postFounded;
  }

//deletePost
const deletePost = async (id) => {
  const postToDelete = await Post.findByIdAndDelete(id);
}

const updatePost =async(id,data)=>{
  const updatedPost = await Post.findByIdAndUpdate(id, data, { returnDocument: "after" })
  return updatedPost;
}

  
  module.exports = { listarPost,createPost,getPostbyId,deletePost,updatePost} 
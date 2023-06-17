/**
 * server.js
    middlewares y rutas
 * 
*/
///middlewares
const express = require("express")
const app= express();

app.use(express.json())

const routerUser =require("./routes/user.routes");
/*
const routeUserPost =require("./routes/post.routes");
const auth =require("./routes/auth.routes");
*/
///rutas
/*
app.use("/posts",routeUserPost);
app.use("/auth",auth);
*/
app.use("/users",routerUser);
app.get("/",(req,res)=>{
	res.json("nuestra api esta funcionando")
})


module.exports=app;
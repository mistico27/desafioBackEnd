/**
 * server.js
    middlewares y rutas
 * 
*/
///middlewares
const express = require("express")
const app= express();
app.use(express.json())

//obtener el API Para las Rutas
const routerUser =require("./routes/user.routes");
const routeUserPost =require("./routes/post.routes");
const auth =require("./routes/auth.routes");


///rutas
app.use("/users",routerUser);
app.use("/posts",routeUserPost);
app.use("/auth",auth);


app.get("/",(req,res)=>{
	res.json("nuestra api esta funcionando")
})


module.exports=app;
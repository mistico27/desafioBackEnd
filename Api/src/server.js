/**
 * server.js
    middlewares y rutas
 * 
*/
///middlewares
const express = require("express")
const app= express();
const cors = require("cors")
app.use(cors())
app.use(express.json())


//obtener el API Para las Rutas
const routerUser =require("./routes/user.routes");
const routeUserPost =require("./routes/post.routes");
const routeAuth =require("./routes/auth.routes");

///rutas
app.use("/users",routerUser);
app.use("/posts",routeUserPost);
app.use("/auth",routeAuth);


app.get("/",(req,res)=>{
	res.json("nuestra api esta funcionando")
})


module.exports=app;
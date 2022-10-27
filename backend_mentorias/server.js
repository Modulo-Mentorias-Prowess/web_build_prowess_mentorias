const express = require("express");
const app = express();
const mysql = require("mysql");
const bcrypt = require("bcrypt" );
const { v4: uuidv4 } = require('uuid') 
const JWTManager     = require("./JWTManager")
const MySQLConnection = require("./sqlFunctions")
const cors = require("cors")
const jwtManager = new JWTManager()
const connection = new MySQLConnection(jwtManager);
require("dotenv").config()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT, ()=>{
    console.log(`Server started in port ${process.env.PORT}`);
    console.log(jwtManager.refreshTokens);
})

app.post("/register", async (req, res) => {
    return connection.register(req, res);
})

app.post("/login", async (req, res) => {
    return connection.login(req, res);
})

app.post("/refreshToken", (req, res) =>{
    return jwtManager.refreshAccess(req, res)
})

app.delete("/logout", (req, res)=>{
    return jwtManager.removeRefreshToken(req, res)
})

/**
 * Content CRUD operations
 */

app.get("/contents", (_req,res) => {
    return connection.getContents(res)
})
app.get("/contents/:id", (req, res) => {
    return connection.getContent(res, req.params.id)
})

app.post("/createContent", (req, res)=>{
    if(!req.body?.content?.id || !req.body?.content?.name || !req.body?.content?.description){
        return res.sendStatus(400)
    }

    return connection.createContent(res, req.body.content)
})

app.patch("/editContent/:id", (req, res)=>{
    if( Object.keys(req.body?.content).length != 3){
        return res.sendStatus(400)
    }

    return connection.patchContent(res, {...req.body.content, id: req.params.id})
})

app.delete("/deleteContent/:id", (req, res)=>{
    return connection.deleteContent(res, req.params.id)
})

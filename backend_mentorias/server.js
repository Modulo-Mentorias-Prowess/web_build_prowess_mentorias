const express = require("express");
const app = express();
const mysql = require("mysql");
const bcrypt = require("bcrypt" );
const cors = require("cors")
const { v4: uuidv4 } = require('uuid') 
const JWTManager     = require("./JWTManager")
const MySQLConnection = require("./sqlFunctions")
require("dotenv").config()

const jwtManager = new JWTManager()
const connection = new MySQLConnection(jwtManager);
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT, ()=>{
    console.log(`Server started in port ${process.env.PORT}`);
    connection.testConnection()
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


/**
 * Managers CRUD operations
 */

app.get("/managers", (_req,res) => {
    return connection.getManagers(res)
})
/**
 * Entrepreneurs CRUD operations
*/

app.get("/entrepreneurs", (_req,res) => {
    return connection.getEntrepreneurs(res)
})

app.post("/createEntrepreneur", (req, res)=>{
    if(!req.body?.entrepreneur?.id || 
        !req.body?.entrepreneur?.names || 
        !req.body?.entrepreneur?.last_names || 
        !req.body?.entrepreneur?.email || 
        !req.body?.entrepreneur?.address || 
        !req.body?.entrepreneur?.phone || 
        !req.body?.entrepreneur?.nameStore || 
        !req.body?.entrepreneur?.descriptionStore || 
        !req.body?.entrepreneur?.googleMapsURL || 
        !req.body?.entrepreneur?.sector || 
        !req.body?.entrepreneur?.city || 
        !req.body?.entrepreneur?.province || 
        !req.body?.entrepreneur?.twitter || 
        !req.body?.entrepreneur?.facebook || 
        !req.body?.entrepreneur?.instagram || 
        !req.body?.entrepreneur?.tiktok 
        ){
        return res.sendStatus(400)
    }

    return connection.createEntrepreneur(res, req.body.entrepreneur)
})

app.patch("/editEntrepreneur/:id", (req, res)=>{
    if(!req.body?.entrepreneur?.id || 
        !req.body?.entrepreneur?.names || 
        !req.body?.entrepreneur?.last_names || 
        !req.body?.entrepreneur?.email || 
        !req.body?.entrepreneur?.address || 
        !req.body?.entrepreneur?.phone || 
        !req.body?.entrepreneur?.nameStore || 
        !req.body?.entrepreneur?.descriptionStore || 
        !req.body?.entrepreneur?.googleMapsURL || 
        !req.body?.entrepreneur?.sector || 
        !req.body?.entrepreneur?.city || 
        !req.body?.entrepreneur?.province || 
        !req.body?.entrepreneur?.twitter || 
        !req.body?.entrepreneur?.facebook || 
        !req.body?.entrepreneur?.instagram || 
        !req.body?.entrepreneur?.tiktok 
        ){
        return res.sendStatus(400)
    }

    return connection.patchEntrepreneur(res, {...req.body.entrepreneur, id: req.params.id})
})

app.delete("/deleteEntrepreneur/:id", (req, res)=>{
    return connection.deleteEntrepreneurs(res, req.params.id)
})
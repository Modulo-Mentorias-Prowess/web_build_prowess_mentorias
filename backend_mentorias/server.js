const express = require("express");
const app = express();
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const JWTManager = require("./JWTManager");
const MySQLConnection = require("./sqlFunctions");
require("dotenv").config();

const jwtManager = new JWTManager();
const connection = new MySQLConnection(jwtManager);
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log(`Server started in port ${process.env.PORT}`);
  connection.testConnection();
  console.log(jwtManager.refreshTokens); // implement refresh tokens
});

app.post("/register", async (req, res) => {
  return connection.register(req, res);
});

app.post("/login", async (req, res) => {
  return connection.login(req, res);
});

app.post("/refreshToken", (req, res) => {
  return jwtManager.refreshAccess(req, res);
});

app.delete("/logout", (req, res) => {
  return jwtManager.removeRefreshToken(req, res);
});

/**
 * Content CRUD operations
 */
app.get("/contents", (_req, res) => {
  return connection.getContents(res);
});
app.get("/contents/:id", (req, res) => {
  return connection.getContent(res, req.params.id);
});

app.post("/createContent", (req, res) => {
  if (
    !req.body?.content?.id ||
    !req.body?.content?.name ||
    !req.body?.content?.description
  ) {
    return res.sendStatus(400);
  }

  return connection.createContent(res, req.body.content);
});

app.patch("/editContent/:id", (req, res) => {
  if (Object.keys(req.body?.content).length != 3) {
    return res.sendStatus(400);
  }

  return connection.patchContent(res, {
    ...req.body.content,
    id: req.params.id,
  });
});

app.delete("/deleteContent/:id", (req, res) => {
  return connection.deleteContent(res, req.params.id);
});

app.get("/searchContent/:q", (req, res) => {
  return connection.searchContent(res, req.params.q.toLowerCase());
});

/**
 * Managers CRUD operations
 */

app.get("/managers", (_req, res) => {
  return connection.getManagers(res);
});

app.post("/createManager", (req, res) => {
    console.log(req.body)
  if (
    !req.body?.manager?.id ||
    !req.body?.manager?.names ||
    !req.body?.manager?.last_names ||
    !req.body?.manager?.email ||
    !req.body?.manager?.address
  ) {
    return res.sendStatus(400);
  }
  req.body.manager.id.trim()
  req.body.manager.names.trim()
  req.body.manager.last_names.trim()
  req.body.manager.email.trim()
  req.body.manager.address.trim()
  return connection.createManager(res, req.body.manager);
});

app.delete("/deleteManager/:id", (req, res) => {
    if(!req.params?.id){
        return res.sendStatus(400)
    }

    return connection.deleteManager(res, req.params?.id)
})

app.patch("/editManager/:id", (req, res) => {
  if (
    !req.body?.manager?.id ||
    !req.body?.manager?.names ||
    !req.body?.manager?.last_names ||
    !req.body?.manager?.email ||
    !req.body?.manager?.address
  ) {
    return res.sendStatus(400);
  }

  return connection.patchManager(res, {
    ...req.body.manager,
    id: req.params.id,
  });
});

app.get("/searchManager/:q", (req, res)=>{
  if(!req.params?.q){
    return res.sendStatus(400)
  }
  return connection.searchManager(res, req.params.q.toLowerCase())
})

/**
 * Entrepreneurs CRUD operations
 */

app.get("/entrepreneurs", (_req, res) => {

  return connection.getEntrepreneurs(res);
});

app.post("/createEntrepreneur", (req, res) => {
  if (
    !req.body?.entrepreneur?.id ||
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
    !req.body?.entrepreneur?.tiktok ||
    !req.body?.entrepreneur?.type
  ) {
    return res.sendStatus(400);
  }

  return connection.createEntrepreneur(res, req.body.entrepreneur);
});

app.patch("/editEntrepreneur/:id", (req, res) => {
  if (
    !req.body?.entrepreneur?.id ||
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
    !req.body?.entrepreneur?.tiktok ||
    !req.body?.entrepreneur?.type
  ) {
    return res.sendStatus(400);
  }

  return connection.patchEntrepreneur(res, {
    ...req.body.entrepreneur,
    id: req.params.id,
  });
});

app.delete("/deleteEntrepreneur/:id", (req, res) => {
  return connection.deleteEntrepreneurs(res, req.params.id);
});

app.get("/searchEntrepreneur/:q", (req, res)=>{
  return connection.searchEntrepreneur(res, req.params.q.toLowerCase())
});

/**
 * Mentorships CRUD
 */

app.get("/mentorships", (_req, res)=>{
  return connection.getMentorships(res)
})
/**
 * Products CRUD
 */

app.get("/products", (_req, res) => {

  return connection.getProducts(res);
});

app.post("/createProduct", (req, res)=>{
  if(!req.body?.product?.id || !req.body?.product?.name || !req.body?.product?.price || !req.body?.product?.description || !req.body?.product?.entrepreneur?.id){
    return res.sendStatus(400)
  }


  return connection.createProduct(res, {
    id: req.body.product.id,
    id_entrepreneur: req.body.product.entrepreneur.id,
    name: req.body.product.name,
    description: req.body.product.description,
    price: req.body.product.price,
  })
})

app.patch("/updateProduct", (req, res)=>{
  if(!req.body?.product?.id || !req.body?.product?.name || !req.body?.product?.price || !req.body?.product?.description ){
    return res.sendStatus(400)
  }
  return connection.patchProduct(res, req.body.product)
})

app.delete("/deleteProduct/:id", (req, res)=>{
  if(!req.params?.id){
    return res.sendStatus(400)
  }

  return connection.deleteProduct(res, req.params.id)
})

app.get("/searchProducts/:q", (req, res) => {
  return connection.searchProducts(res, req.params.q.toLowerCase());
});

/**
 * Mentorship CRUD operations
 */

app.get("/getContentsMentorship/:id", (req, res)=>{
  
  if(!req.params?.id){
    return res.sendStatus(400)
  }

  return connection.getContentsMentorship(res, req.params.id)
})

app.delete("/deleteMentorship/:id", (req, res)=>{
  if(!req.params?.id){
    return res.sendStatus(400)
  }
  return connection.deleteMentorship(res, req.params.id)
})

app.post("/createMentorship", (req, res)=>{
  console.log(req.body);
  if(!req?.body?.mentorship?.id ||
    !req?.body?.mentorship?.title ||
    !req?.body?.mentorship?.description ||
    !req?.body?.mentorship?.date_mentorship ||
    !req?.body?.mentorship?.manager ||
    !req?.body?.mentorship?.entrepreneur ||
    req?.body?.mentorship?.contents?.length == 0
    ){
      return res.sendStatus(400)
    }
    // This code is pretty bad, must be refactored xd
    let contents = []
    for (let index = 0; index < req.body.mentorship.contents.length; index++) {
      const element = req.body.mentorship.contents[index];
      contents.push({id_mentorship: req.body.mentorship.id, id_content: element.id})
    }

  return connection.createMentorship(res, 
    {
      id: req.body.mentorship.id,
      title: req.body.mentorship.title,
      description: req.body.mentorship.description,
      date_mentorship: req.body.mentorship.date_mentorship,
      id_entrepreneur: req.body.mentorship.entrepreneur.id,
      id_manager: req.body.mentorship.manager.id
    },
    contents
    )
})

app.patch("/updateMentorship", (req, res)=>{
  console.log(req.body);
  if(!req.body?.mentorship?.id || !req.body?.mentorship?.id_entrepreneur || !req.body?.mentorship?.id_manager || !req.body?.mentorship?.title || !req.body?.mentorship?.description || !req.body?.mentorship?.date_mentorship){
    return res.sendStatus(400)
  }
  if(req.body.mentorship.date_mentorship.charAt(req.body.mentorship.date_mentorship.length - 1) === 'Z'){
    req.body.mentorship.date_mentorship = req.body.mentorship.date_mentorship.substring(0, req.body.mentorship.date_mentorship.length - 8)
  }
  console.log(req.body);
  return connection.patchMentorship(res, req.body.mentorship)
}
  
)
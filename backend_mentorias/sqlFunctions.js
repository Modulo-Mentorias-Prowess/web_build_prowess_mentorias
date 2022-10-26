const mysql = require("mysql");
const bcrypt = require("bcrypt" );
const { v4: uuidv4 } = require('uuid') 


require("dotenv").config()

/**
 * Creates a database connection, also allows to make CRUD operations in the database 
 */
class MySQLConnection{
    constructor(JWTManager){
        this.jwtManager = JWTManager
        this.db = mysql.createPool({
            connectionLimit: 100,
            host: process.env.DB_HOST,       
            user: process.env.DB_USER,         
            password: process.env.DB_PASSWORD,  
            database: process.env.DB_DATABASE,      
            port: process.env.DB_PORT             
        }) 

        this.db.getConnection( (err, connection)=> {
            if (err){
                throw (err)
            }
            console.log ("DB connected successful: " + connection.threadId)
        })
    }

    /**
     * Creates the user if it doesn't exits, it requires a 
     * valid userName and password, the password is hashed (encrypted) using bcrypt
     * @param {*} req: a HTTP request
     * @param {*} res: a HTTP response
     * @returns res: A HTTP response with the status of the request (400 BAD REQUEST, 409 CONFLICT, 201 CREATED)
     */
    async register(req, res){
        // If there is no userName or no password return HTTP 400 BAD REQUEST
        if(!req.body?.userName || !req.body?.password){
            return res.sendStatus(400)       
        }

        const userName = req.body.userName
        const password = await bcrypt.hash(req.body.password, 10)

        this.db.getConnection(async (err, connection) => {
            if(err){
                throw(err)
            }

            // MySQL query to search if user already exists
            const userExistQuery = mysql.format("SELECT * FROM users WHERE userName = ?",
                                                [userName])
            const insertUserQuery = mysql.format("INSERT INTO users VALUES (?, ?, ?)",
                                                [uuidv4(), userName, password])
            
            await connection.query(userExistQuery, async (err, results) => {
                if(err){
                    throw (err)
                }

                // If the user already exits return HTTP 409 CONFLICT 
                // where the conflict is the older user
                if(results.length != 0){
                    connection.release()
                    return res.sendStatus(409)
                }
                // If user doesn't exits create it and return HTTP 201 CREATE
                await connection.query(insertUserQuery, (err, results) => {
                    connection.release()
                    if(err){
                        throw (err)
                    }

                    return res.sendStatus(201)
                })
                
            })

        })
    }

    /**
     * Auths user data to allow for login.
     * @param {*} req: HTTP request
     * @param {*} res: HTTP response
     * @returns Response status (400 BAD REQUEST, 404 NOT FOUND, 200 OK, 401 UNAUTHORIZED)
     */
    async login(req, res){
        // If there is no userName or no password return HTTP 400 BAD REQUEST
        if(!req.body?.userName || !req.body?.password){
            return res.sendStatus(400)       
        }

        const user = req.body.userName
        const password = req.body.password

        this.db.getConnection(async (err, connection) => {
            if(err){
                throw(err)
            }

            const userDataQuery = mysql.format("SELECT * FROM users WHERE userName = ?",
                                                [user] )

            await connection.query(userDataQuery, async (err, userData) =>{
                connection.release()
                if(err){
                    throw(err)
                }

                // If no user is found return 404 RESOURCE NOT FOUND 
                if(userData.length == 0){
                    return res.sendStatus(404)
                }

                // if the password is correct send the status 200 OK to allow login
                if(await bcrypt.compare(password, userData[0].pass)){
                    return res.json({ accessToken: this.jwtManager.generateAccessToken({user:user}),
                                      refreshToken: this.jwtManager.generateRefreshToken({user: user}) 
                                    })
                }

                // if the password is incorrect send the status 401 UNAUTHORIZED
                return res.sendStatus(401)
            })
        })
    }

    getContents(res){
        this.db.query("SELECT * FROM content", (err, data)=>{
            if(err){
                throw(err)
            }

            return res.send(data)
        })
    }

    getContent(res, id){
        const q = mysql.format("SELECT * FROM content WHERE content.id = ?", [id])

        this.db.query(q, (err, data)=>{
            if(err){
                throw(err)
            }

            return res.send(data)
        })
    }

    executeQuery(query){
        this.db.query(query, (err, data)=>{
            if(err){
                return false
            }

        })
        return true

    }

    createContent(res, content){
        if(this.executeQuery(mysql.format("INSERT INTO content VALUES (?, ?, ?)", [content.id, content.name, content.description]))){
            return res.sendStatus(201)
        }

        return res.sendStatus(500)
    }

    patchContent(res, content){
        if(this.executeQuery(mysql.format("UPDATE content SET name=?, description = ? WHERE id=?", 
                                        [content.name, content.description, content.id]))){
            return res.sendStatus(200)
        }

        return res.sendStatus(500)
    }

    deleteContent(res, id){
        if(this.executeQuery(mysql.format("DELETE FROM content WHERE id=?", [id]))){
            return res.sendStatus(200)
        }

        return res.sendStatus(500)
    }


}



module.exports = MySQLConnection
const jwt = require("jsonwebtoken")

/**
 * Implements access and refresh token for authentification using jsonwebtoken
 */
class JWTManager{
    constructor(){
        this.refreshTokens = []
    }

    generateAccessToken(user){
        return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "15m"})
    }

    generateRefreshToken(user){
        const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "20m"})
        this.refreshTokens.push(refreshToken) // Push the refresh token to the valid refresh tokens
        return refreshToken
    }

    /**
     * Gets the payload (data) inside of a JWT.
     * @param {*} token: a JWT
     * @returns an object with the payload of the JWT
     */
    parseJWT(token){
        return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
    }

    /**
     * Refreshes the validity of the refresh token if it hasn't expired
     * @param {*} req: a HTTP request 
     * @param {*} res: a HTTP response
     * @returns Code `400 BAD REQUEST` if no token is sent or a `JSON` with 
     * the new refresh and access tokens
     */
    refreshAccess(req, res){
        if(!req.body?.refreshToken ){
            return res.sendStatus(400)
        }

        const { user } = this.parseJWT(req.body.refreshToken)

        if(!this.refreshTokens.includes(req.body.refreshToken)){
            return res.send("Refresh token invalid.")
        }

        this.refreshTokens = this.refreshTokens.filter((c) => c != req.body.refreshToken)
        
        return res.json({ accessToken: this.generateAccessToken({user: user}),
                          refreshToken: this.generateRefreshToken({user: user}) 
                        })
    }

    /**
     * Removes a refresh token from the valid refresh tokens
     * @param {*} req: a HTTP request
     * @param {*} res: a HTTP response
     * @returns Code `400 BAD REQUEST` if no token is passed or Code `200 OK` if the 
     * refresh token was deleted
     */
    removeRefreshToken(req, res){
        if(!req.body?.refreshToken){
            return res.sendStatus(400)
        }

        this.refreshTokens = refreshTokens.filter( (c) => c != req.body.refreshToken)
        return res.sendStatus(204)
    }

}

module.exports = JWTManager
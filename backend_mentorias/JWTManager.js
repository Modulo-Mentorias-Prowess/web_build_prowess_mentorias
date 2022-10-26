const jwt = require("jsonwebtoken")
class JWTManager{
    constructor(){
        this.refreshTokens = []
    }


    generateAccessToken(user){
        return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "15m"})
    }

    generateRefreshToken(user){
        const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "20m"})
        this.refreshTokens.push(refreshToken)
        return refreshToken
    }

    parseJWT(token){
        return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
    }

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

    removeRefreshToken(req, res){
        if(req.body?.refreshToken){
            return res.sendStatus(400)
        }

        this.refreshTokens = refreshTokens.filter( (c) => c != req.body.refreshToken)
        return res.sendStatus(204)
    }

}

module.exports = JWTManager
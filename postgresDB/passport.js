const db = require("./data/db.js")
const dotenv = require("dotenv");
dotenv.config();
const SECRET = process.env.SECRET
const passport = require("passport")
const passportJWT = require("passport-jwt")

passport.use(
    new passportJWT.Strategy({
        secretOrKey:SECRET,
        jwtFromRequest:passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    }, async(payload, done)=>{
        const user = db.one(`SELECT * FROM users WHERE id=$1`, payload.id)
        try {
            return user ? done(null, user): done(new Error("User not found."))
        } catch (error) {
            done(error)
        }
    })
)


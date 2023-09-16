const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const saltRound = 10;

const hashPassword = async (password)=>{
    let salt = await bcrypt.genSalt(saltRound)
    let hashedPassword = await bcrypt.hash(password,salt)
    return hashedPassword
}

const comparePassword = async (password,hashedPassword)=>{
    return bcrypt.compare(password,hashedPassword)
}

const createToken = async (payload)=>{
    const token = await jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
            expiresIn:process.env.JWT_EXPIRE
        })
    return token
}

const decodeToken = async(token)=>{
    return await jwt.decode(token)
}

//middleware
const validate = async(req,res,next)=>{
    try {
        let token = req?.headers?.authorization?.split(" ")[1]
        if(token)
        {
            let payload = await decodeToken(token)
            let currentTime = Math.round(+new Date()/1000)
            if(currentTime<payload.exp)
                next()
            else
                res.status(401).send({message:"Token Expired"})
        }
        else
        {
            res.status(401).send({message:"Token Not Found"})
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).send({error:error.message})

    }
}

const adminGaurd = async(req,res,next)=>{
    try {
        let token = req?.headers?.authorization?.split(" ")[1]
        if(token)
        {
            let payload = await decodeToken(token)
            if(payload.role === 'admin')
                next()
            else
                res.status(401).send({message:"Only Admin are allowed to access"})
        }
        else
        {
            res.status(401).send({message:"Token Not Found"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({error:error.message})
    }
}
module.exports = {
    hashPassword,
    comparePassword,
    createToken,
    decodeToken,
    validate,
    adminGaurd
}
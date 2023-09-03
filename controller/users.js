const sanitize = require('../common/Sanitize')
const userModel = require('../model/users')
const getUsers = async(req,res)=>{
    try {
        let data = await userModel.find()
        res.status(200).send({
            data,
            message:"User Data Fetch Successfull"
        })
    } catch (error) { 
        res.status(500).send({
            message:"Internal Server Error",
            errorMessage: error.message
        })
    }
}
const getUserById =  async(req,res)=>{
    try {
        let userId = sanitize.isString(req.params.id)
        let data = await userModel.findById(userId)
        if(data)
        {
            res.status(200).send({
                data,
                message:"User Data Fetch Successfull"
            })
        }
        else
            res.status(400).send({message:"Invalid User ID"})
    } catch (error) { 
        res.status(500).send({
            message:"Internal Server Error",
            errorMessage: error.message
        })
    }
}

const createUser = async(req,res)=>{
    try {
        const firstName = sanitize.isString(req.body.firstName)
        const lastName = sanitize.isString(req.body.lastName)
        const email = sanitize.isString(req.body.email)
        const batch = sanitize.isString(req.body.batch)
        const status = sanitize.isBoolean(req.body.status)

       let existingUser = await userModel.findOne({email:email})
       if(!existingUser)
       {
            await userModel.create({firstName,lastName,email,batch,status})

            res.status(200).send({
                message:"User Created Successfully"
            })
       }
       else
       {
        res.status(400).send({
            message:`${req.body.email} already exists`
        })
       }
    } catch (error) { 
        res.status(500).send({
            message:"Internal Server Error",
            errorMessage: error.message
        })
    }
}

const editUserById = async(req,res)=>{
    try {

        const firstName = sanitize.isString(req.body.firstName)
        const lastName = sanitize.isString(req.body.lastName)
        const email = sanitize.isString(req.body.email)
        const batch = sanitize.isString(req.body.batch)
        const status = sanitize.isBoolean(req.body.status)

        let userId = sanitize.isString(req.params.id)
        let user = await userModel.findById(userId)
        if(user)
        {
            // bad approach await userModel.updateOne({_id: userId},{$set:{firstName,lastName,email,batch,status}})
            //suggested approach
            user.firstName = firstName
            user.lastName = lastName
            user.email = email
            user.batch = batch
            user.status = status
            await user.save()

            res.status(200).send({
                message:"User Data Edited Successfully"
            })
        }
        else
            res.status(400).send({message:"Invalid User ID"})
        
    } catch (error) { 
        res.status(500).send({
            message:"Internal Server Error",
            errorMessage: error.message
        })
    }
}

const deleteUserById = async(req,res)=>{
    try {
        let userId = sanitize.isString(req.params.id)
        let data = await userModel.findById(userId)
        if(data)
        {
            await userModel.deleteOne({_id:userId})
            res.status(200).send({
                message:"User Data Deleted Successfully"
            })
        }
        else
        {
            res.status(400).send({
                message:"Invalid User ID"
            })
        }
        
    } catch (error) { 
        res.status(500).send({
            message:"Internal Server Error",
            errorMessage: error.message
        })
    }
}

module.exports={
    getUsers,
    getUserById,
    createUser,
    editUserById,
    deleteUserById
}
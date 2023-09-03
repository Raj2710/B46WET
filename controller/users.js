const {mongodb,client} = require('../config/dbconfig')
const sanitize = require('../common/Sanitize')
const getUsers = async(req,res)=>{
    await client.connect();
    try {
        let db = await client.db(process.env.dbName)
        let data = await db.collection('users').find().toArray();
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
    finally{
        await client.close()
    }
}
const getUserById =  async(req,res)=>{
    await client.connect()
    try {
        let db = await client.db(process.env.dbName)
        let userId = new mongodb.ObjectId(req.params.id)
        let data = await db.collection('users').findOne({_id: userId})
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
    finally{
        await client.close()
    }
}

const createUser = async(req,res)=>{
    await client.connect();
    try {
        const firstName = sanitize.isString(req.body.firstName)
        const lastName = sanitize.isString(req.body.lastName)
        const email = sanitize.isString(req.body.email)
        const batch = sanitize.isString(req.body.batch)
        const status = sanitize.isBoolean(req.body.status)

        const db = client.db(process.env.dbName);
       let existingUser = await db.collection('users').findOne({email:email})
       if(!existingUser)
       {
            await db.collection('users').insertOne({firstName,lastName,email,batch,status})

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
    finally{
        await client.close()
    }
}

const editUserById = async(req,res)=>{
    await client.connect();
    try {
        let db = await client.db(process.env.dbName)
        let userId = new mongodb.ObjectId(req.params.id)
        let data = await db.collection('users').findOne({_id: userId})
        if(data)
        {
            await db.collection('users').updateOne({_id: userId},{$set:req.body})
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
    finally{
        await client.close()
    }
}

const deleteUserById = async(req,res)=>{
    await client.connect();
    try {
        let db = await client.db(process.env.dbName)
        let userId = new mongodb.ObjectId(req.params.id)
        let data = await db.collection('users').findOne({_id: userId})
        if(data)
        {
            await db.collection('users').deleteOne({_id: userId})
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
    finally{
        await client.close()
    }
}

module.exports={
    getUsers,
    getUserById,
    createUser,
    editUserById,
    deleteUserById
}
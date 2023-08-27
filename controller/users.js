const data = [
    {
        "firstName":"Nag",
        "lastName":"Raj",
        "email":"nag@gmail.com",
        "batch":"B20WEE",
        "status":false
    },
    {
        "firstName":"Raj",
        "lastName":"Raj",
        "email":"Raj@gmail.com",
        "batch":"B46WET",
        "status":true
    },
    {
        "firstName":"Kritish",
        "lastName":"Datt",
        "email":"kritish@gmail.com",
        "batch":"B46WET",
        "status":true   
    }
]
const getUsers = async(req,res)=>{
    try {
        res.status(200).send({
            data,
            message:"User Data Fetch Successfull"
        })
    } catch (error) { 
    }
}
const getUserById =  async(req,res)=>{
    try {
        let userId = Number(req.params.id)
        if(userId<data.length)
        {
            res.status(200).send({
                data:data[userId],
                message:"User Data Fetch Successfull"
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

const createUser = async(req,res)=>{
    try {
        let validateData = dat.filter((e)=>e.email===req.body.email)
        if(validateData.length===0)
        {
            data.push(req.body)
            res.status(201).send({
                message:"User Data Created Successfully"
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
        let userId = Number(req.params.id)
        if(userId<data.length)
        {
            data.splice(userId,1,req.body)
            res.status(200).send({
                message:"User Data Edited Successfully"
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

const deleteUserById = async(req,res)=>{
    try {
        let userId = Number(req.params.id)
        if(userId<data.length)
        {
            data.splice(userId,1)
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
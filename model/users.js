const mongoose = require('./index')

const validateEmail = (e)=>{
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(e); 
}

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"firstName is required"]
    },
    lastName:{
        type:String,
        required:[true,"lastName is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        validate:{
            validator:validateEmail,
            message:"Invalid Email Id"
        }    
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    batch:{
        type:String,
        required:[true,"batch is required"]
    },
    status:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
        default:'student'
    }
},{versionKey:false,collection:"users"})

const userModel = mongoose.model('users',userSchema)

module.exports = userModel;
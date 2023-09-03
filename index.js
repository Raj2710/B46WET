require('dotenv').config()
const express = require('express')
const UserRoute = require('./routes/users')
const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use('/users',UserRoute)

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to Express</h1>')
})


app.listen(PORT, ()=>console.log(`App is running in port ${PORT}`))
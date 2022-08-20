require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const connect = require("./db")


app.use(express.json())
app.use(cors())

const UserController = require("./src/controllers/user.controller")

app.use("/user",UserController)

const PORT = process.env.PORT||8080

app.listen(PORT,async function(){
    try{
        await connect()
        console.log("successfully connected")
    }
    catch(error){
        console.log(error.message)
    }
})
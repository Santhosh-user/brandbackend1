const mongoose = require("mongoose")

const connect = ()=>{
 
     return mongoose.connect(process.env.CRT)
 
}

module.exports = connect
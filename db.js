const mongoose = require("mongoose")

const connect = ()=>{
 
     return mongoose.connect(process.env.DB)
 
}

module.exports = connect
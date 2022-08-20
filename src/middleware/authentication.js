require("dotenv").config();
const jwt = require("jsonwebtoken");

const checkToken = (token) => {

    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {

        if (err) return reject(err);
        resolve(user);

        });
    });
    
};

module.exports = async (req, res, next) => {

    if(!req.headers.authorization){
        return res.status(400).send({
            message: "authorization invalid or token not found",
        });
    }

    if(!req.headers.authorization.startsWith("Bearer")){
        return res.status(400).send({
            message: "authorization invalid or token not found",
        });
    }

    const token = req.headers.authorization.split(" ")[1];

    let user;
 
    try{
        user = await checkToken(token);
    }
    catch(err){
        return res.status(400).send({
            message: "authorization invalid or token not found",
        });
    }

    req.user = user.user;

    return next();
};

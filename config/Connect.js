var mongoose = require("mongoose");

const Connect = async() =>{
    try{
        let result = await mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true }, function(err){
            if(err){
                return console.error("Couldn't connect to db!");
            }
            console.log("Connected to mongodb successfully!!");
        })
    }
    catch(err){
        return console.error(err);
    }
}

module.exports = Connect

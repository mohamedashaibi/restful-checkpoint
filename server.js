require('dotenv').config();
var express = require('express');
var Connect = require('./config/Connect');


//Get the different routers
var userRouter = require("./routes/User");
//Create an express instance in app
var app = express();
//Parse content as json
app.use(express.json());
//Connect to DB
Connect();
//Link the routes to the server
app.use("/users", userRouter);

app.listen(process.env.PORT, function(error){
    if(error){
        return console.error("couldn't connect to server.");
    }
    console.log("Connected successfully!");
})
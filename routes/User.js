var express = require("express");
var router = express.Router();
var User = require("../models/User")

//GET: used to get all users
//URL: /users/

router.get("/", function(req, res){
    User.find(function(err, doc){
        if(err){
            return console.error(err)
        }
        res.send(doc)
    })
});

//POST: used to add a user
//URL: /users/post
//Syntax:: 
// request body should have an object as follows
// {
//     name: "value of name to be changed",
//     username: "value of username to be changed",
//     password: "value of password to be changed"
// }

router.post("/create", function(req, res){
    var user = req.body;
    console.log(user);
    User.insertMany(user)
    res.send(user)

})

//DELETE: used to delete a user
//URL: /users/delete
//Syntax:: 
// request body should have an object as follows
// {
//     id: "id to be updated goes here"
// }

router.delete("/delete", function(req, res){
    console.log("in delete");
    var id = req.body.id;
    console.log(id)
    User.findByIdAndDelete(id, function(err, doc){
        if(err){
            return console.error(err)
        }
        console.log(doc)
    })
    res.send("Deleted successfully!!");
})

//PUT: used to edit a user
//URL: /users/edit
//Syntax:: 
// request body should have an object as follows
// {
//     id: "id to be updated goes here",
//     name: "value of name to be changed",
//     username: "value of username to be changed",
//     password: "value of password to be changed"
// }

router.put("/edit", function(req, res){
    console.log("in edit");
    
    var params = req.body;
    console.log(params);

    User.findByIdAndUpdate(params.id, { name: params.name, username: params.username, password: params.password}, function(err, doc){
        if(err){
            return console.error(err);
        }
        console.log(doc);
    })
    res.send("updated successfully!!");

})

module.exports = router;
const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/privacy", function(req, res){
    res.redirect("/");
});

app.get("/termsofuse", function(req, res){
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("Server is running on port 3000")
})
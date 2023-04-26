const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/privacy", function(req, res){
    res.sendFile(__dirname + "/privacy.html");
});

app.get("/termsofuse", function(req, res){
    res.sendFile(__dirname + "/termsofuse.html");
});

app.listen(process.env.PORT || 80, function(){
    console.log("Server is running on port 3000")
})
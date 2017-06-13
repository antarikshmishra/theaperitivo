var express= require("express");
var app = express();
app.use(express.static("files"));
app.listen(8686,function(err){
    console.log("My app is running on port 8686");
});
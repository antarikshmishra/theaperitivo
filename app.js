var express= require("express");
var app = express();
app.use(express.static("files"));
app.listen(6666,function(err){
    console.log("My app is running on port 6666");
});
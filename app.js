var express= require("express");
var bodyParser = require('body-parser');

var app = express();
app.use(express.static("files"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post("/contact", function(req,res){
    console.log(req.body);
    res.send('Merci');
});

app.listen(8686,function(err){
    console.log("My app is running on port 8686");
});
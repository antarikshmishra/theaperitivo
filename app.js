var express= require("express");
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://essec:cergyisc00l@138.68.110.210:27017/admin?readPreference=primary';

MongoClient.connect(url, function(err, db) {

    var collec = db.collection("aperitivo");

    var app = express();
    app.use(express.static("files"));

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));

    // parse application/json
    app.use(bodyParser.json());

    app.post("/contact", function(req,res){
        console.log(req.body);
        collec.insert(req.body);
        res.sendFile(__dirname + "/files/Contact.html");
    });

    app.listen(8686,function(err){
        console.log("My app is running on port 8686");
    });

});
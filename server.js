/* Note Taker (18.2.6)
 * backend
 * ==================== */

// Dependencies
var express = require("express");
var mongojs = require("mongojs");
var bodyParser = require("body-parser");
var logger = require("morgan");

var app = express();

// Set the app up with morgan, body-parser, and a static folder
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static("views"));

// // Database configuration
// var databaseUrl = "CryptIDDatabase";
// var collections = ["cryptoAddresses"];

// // Hook mongojs config to db variable
// var db = mongojs(databaseUrl, collections);

// // Log any mongojs errors to console
// db.on("error", function(error) {
//   console.log("Database Error:", error);
// });



require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// app.get("/", function(req, res){
// 	res.send(index.html);
// });

// app.post("/submit", function(req, res){
// 	console.log(req.body);

// 	db.cryptoAddresses.insert(req.body, function(error, saved){
// 		if(error){
// 			console.log(error);
// 		}

// 		else{
// 			res.send(saved);
// 		}
// 	})
// })


// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});

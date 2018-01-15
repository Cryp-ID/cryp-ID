const mongojs = require("mongojs");

// Database configuration
var databaseUrl = "CryptIDDatabase";
var collections = ["cryptoAddresses"];

// Hook mongojs config to db variable
var db = mongojs(databaseUrl, collections);

// Log any mongojs errors to console
db.on("error", function(error) {
  console.log("Database Error:", error);
});


module.exports = function(app) {
    app.post("/submit", function(req, res) {
        console.log(req.body);

        db.cryptoAddresses.insert(req.body, function(error, saved) {
            if (error) {
                console.log(error);
            } else {
                res.send(saved);
            }
        })
    })

}

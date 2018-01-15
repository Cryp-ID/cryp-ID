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
    });


        // Delete One from the DB
    app.get("/delete/:id", function(req, res) {
      // Remove a note using the objectID
      db.cryptoAddresses.remove({
        "_id": mongojs.ObjectID(req.params.id)
      }, function(error, removed) {
        // Log any errors from mongojs
        if (error) {
          console.log(error);
          res.send(error);
        }
        // Otherwise, send the mongojs response to the browser
        // This will fire off the success function of the ajax request
        else {
          console.log(removed);
          res.send(removed);
        }
      });
    });


}
// 
var path = require("path");


module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // route loads the "Landing/Home" page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/public/index.html"));
    });

};
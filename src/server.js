require("dotenv").config();
const exp = require("express");
const bodyParser = require("body-parser");
const allroutes = require("./routes/index");

const app = exp();
const port = process.env.PORT || 8000;

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//other routers
allroutes.getAllRoutes(app);

app.listen(port);
console.log('server started on: ' + port);
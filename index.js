const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const db = require("./app/models");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json())
app.use(express.json());



app.use(express.urlencoded({
    extended: true
}));

db.sequelize.sync();

require("./app/routes/micro")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
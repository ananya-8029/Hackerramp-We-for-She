const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");
const { connectToMongo } = require("./db");

app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const Port = process.env.PORT || 5000;

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/wishlists", require("./routes/wishlists"))
app.use("/api/moments",require("./routes/reels"))

const listener = app.listen(Port, async () => {
  await connectToMongo();
  console.log("App listening on port " + listener.address().port);
});

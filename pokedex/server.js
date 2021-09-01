const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

app.use("/style", express.static("./public/style.css"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/main.html"));
});

let port = process.env.PORT || 5252;

app.listen(port, () => {
  console.log(`running on ${port}`);
});

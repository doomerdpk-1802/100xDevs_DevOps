// npx server - command to serve files over intranet

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});

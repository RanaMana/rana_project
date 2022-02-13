const express = require("express");

const app = express();

app.set("port", 5555);

app.get("/", (req, res) => {
  console.log("REQ: ", req);
});
app.listen(5555, () => {
  console.log(`Example app listening on port ${5555}`);
});

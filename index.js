const express = require("express");
const PORT = 5555;
const app = express();

app.use(express.static("app"));

app.listen(PORT, () => {
  console.log(`Proven Robotics Server listening on port ${PORT}`);
});

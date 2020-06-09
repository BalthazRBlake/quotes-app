const express = require("express");
const server = express();
const { PORT } = require("./config");

server.use(express.static("./public"));

server.listen(PORT, () => {
  console.log(`Application running on PORT ${PORT}`);
});
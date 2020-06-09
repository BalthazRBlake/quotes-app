const express = require("express");
const server = express();
const { PORT } = require("./config");

server.listen(PORT, () => {
  console.log(`Application running on PORT ${PORT}`);
});
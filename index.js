const express = require("express");
const server = express();
const { PORT } = require("./config");
const { HomeRoutes } = require("./routes");

server.use(express.static("./public"));
server.use(express.json())

server.get("/", HomeRoutes);

server.listen(PORT, () => {
  console.log(`Application running on PORT ${PORT}`);
});
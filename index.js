const express = require("express");
const server = express();
const { PORT } = require("./config");
const { HomeRoutes } = require("./routes");
const { NotFoundMiddleware } = require("./middlewares");

server.use(express.static("./public"));
server.use(express.json())

server.get("/", HomeRoutes);
//server.get("/about", HomeRoutes); // should it work without this line?
server.use(NotFoundMiddleware);

server.listen(PORT, () => {
  console.log(`Application running on PORT ${PORT}`);
});
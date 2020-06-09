class HomeController {
  async index(request, response) {
    return response.send({ message: "Hello Node.js" });
  }
}

module.exports = new HomeController();
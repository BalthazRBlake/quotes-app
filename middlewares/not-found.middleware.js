module.exports = function(request, response, next) {
  return response.status(404).send({ message: "Page not found!!!" });
};
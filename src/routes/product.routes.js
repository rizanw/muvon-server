const controller = require("../controllers/product.controller");
const { authJwt } = require("../middlewares");
require("dotenv").config();
const config = require("../config");

const apiUri = config.api.uri;

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(`${apiUri}/product/:id`, controller.getById);
  app.post(`${apiUri}/product`, [authJwt.verifyToken], controller.create);
  app.patch(`${apiUri}/product/:id`, [authJwt.verifyToken], controller.update);
  app.delete(`${apiUri}/product/:id`, [authJwt.verifyToken], controller.delete);
};

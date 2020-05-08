const express = require("express");
const bodyParser = require("body-parser");

const dishRouter = express.Router();

dishRouter.use(bodyParser.urlencoded({ extended: true }));
dishRouter.use(bodyParser.json());

dishRouter
  .route("/")
  .all((req, res, next) => {
    res.statusMessage = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send all the dishes");
  })
  .post((req, res, next) => {
    console.log(req.body);
    res.end(
      "Will add the dish: " +
        req.body.name +
        " with details " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported in /dishes");
  })
  .delete((req, res, next) => {
    res.end("Deleting all the dishes");
  });

module.exports = dishRouter;

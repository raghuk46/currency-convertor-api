"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("regenerator-runtime/runtime.js");

var _express = require("express");

var _CurrencyController = require("../controllers/CurrencyController");

var _ConversionController = require("../controllers/ConversionController");

var routes = new _express.Router();
routes.post("/create", _CurrencyController.createCurrency);
routes.post("/createRate", _ConversionController.createRate);
routes.get("/convert", _ConversionController.getRate);

var _default = function _default(app) {
  app.use("/api/v1", routes);
};

exports["default"] = _default;
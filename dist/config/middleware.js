"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _compression = _interopRequireDefault(require("compression"));

var _helmet = _interopRequireDefault(require("helmet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isProd = process.env.NODE_ENV === "production";
var isDev = process.env.NODE_ENV === "development";

var _default = function _default(app) {
  if (isProd) {
    app.use((0, _compression["default"])());
    app.use((0, _helmet["default"])());
  }

  app.use(_bodyParser["default"].json());
  app.use(_bodyParser["default"].urlencoded({
    extended: true
  }));

  if (isDev) {
    app.use((0, _morgan["default"])("dev"));
  }

  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });
};

exports["default"] = _default;
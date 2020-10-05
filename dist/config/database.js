"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _constants = _interopRequireDefault(require("./constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose["default"].Promise = global.Promise;
var mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

try {
  _mongoose["default"].connect(_constants["default"].MONGO_URL, mongooseOptions);
} catch (err) {
  _mongoose["default"].createConnection(_constants["default"].MONGO_URL, mongooseOptions);
}

_mongoose["default"].connection.once("open", function () {
  return console.log("Connection to DB Successful");
}).on("error", function (e) {
  throw e;
});
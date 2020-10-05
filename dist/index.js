"use strict";

var _express = _interopRequireDefault(require("express"));

var _constants = _interopRequireDefault(require("./config/constants"));

var _middleware = _interopRequireDefault(require("./config/middleware"));

require("./config/database");

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
(0, _middleware["default"])(app);
(0, _routes["default"])(app);
app.listen(_constants["default"].PORT, function (err) {
  if (err) console.log("Something Went Wrong", err);
  console.log("Server is listening at http://localhost:".concat(_constants["default"].PORT));
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var dev = {
  MONGO_URL: "mongodb://localhost/conversiondb-dev"
};
var test = {
  MONGO_URL: "mongodb://localhost/conversiondb-dev"
};
var prod = {
  MONGO_URL: "mongodb://localhost/conversiondb"
};
var defaultConf = {
  PORT: process.env.PORT || 8080
};

var buildConfig = function buildConfig(env) {
  switch (env) {
    case "development":
      return dev;
      break;

    case "test":
      return test;
      break;

    default:
      return prod;
  }
};

var _default = _objectSpread(_objectSpread({}, defaultConf), buildConfig(process.env.NODE_ENV));

exports["default"] = _default;
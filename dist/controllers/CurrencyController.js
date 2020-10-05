"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCurrency = void 0;

var _httpStatus = _interopRequireDefault(require("http-status"));

var _Currency = _interopRequireDefault(require("../models/Currency"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createCurrency = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var currency;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            currency = new _Currency["default"](req.body);
            currency.save();
            return _context.abrupt("return", res.status(_httpStatus["default"].OK).json({
              message: "Currency Saved Succesfully"
            }));

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(_httpStatus["default"].BAD_REQUEST).json(_context.t0));

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));

  return function createCurrency(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createCurrency = createCurrency;
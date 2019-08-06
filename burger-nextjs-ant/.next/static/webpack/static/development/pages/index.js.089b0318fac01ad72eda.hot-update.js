webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/antd/lib/_util/getScroll.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/_util/getScroll.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getScroll;

function getScroll(target, top) {
  if (false) {}

  var prop = top ? 'pageYOffset' : 'pageXOffset';
  var method = top ? 'scrollTop' : 'scrollLeft';
  var isWindow = target === window;
  var ret = isWindow ? target[prop] : target[method]; // ie6,7,8 standard mode

  if (isWindow && typeof ret !== 'number') {
    ret = document.documentElement[method];
  }

  return ret;
}
//# sourceMappingURL=getScroll.js.map


/***/ }),

/***/ "./node_modules/antd/lib/back-top/index.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/back-top/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcAnimate = _interopRequireDefault(__webpack_require__(/*! rc-animate */ "./node_modules/rc-animate/es/Animate.js"));

var _addEventListener = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/Dom/addEventListener */ "./node_modules/rc-util/lib/Dom/addEventListener.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _raf = _interopRequireDefault(__webpack_require__(/*! raf */ "./node_modules/raf/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _getScroll = _interopRequireDefault(__webpack_require__(/*! ../_util/getScroll */ "./node_modules/antd/lib/_util/getScroll.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var easeInOutCubic = function easeInOutCubic(t, b, c, d) {
  var cc = c - b;
  t /= d / 2;

  if (t < 1) {
    return cc / 2 * t * t * t + b;
  } else {
    return cc / 2 * ((t -= 2) * t * t + 2) + b;
  }
};

function noop() {}

function getDefaultTarget() {
  return window;
}

var BackTop =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BackTop, _React$Component);

  function BackTop(props) {
    var _this;

    _classCallCheck(this, BackTop);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BackTop).call(this, props));

    _this.getCurrentScrollTop = function () {
      var getTarget = _this.props.target || getDefaultTarget;
      var targetNode = getTarget();

      if (targetNode === window) {
        return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
      }

      return targetNode.scrollTop;
    };

    _this.scrollToTop = function (e) {
      var scrollTop = _this.getCurrentScrollTop();

      var startTime = Date.now();

      var frameFunc = function frameFunc() {
        var timestamp = Date.now();
        var time = timestamp - startTime;

        _this.setScrollTop(easeInOutCubic(time, scrollTop, 0, 450));

        if (time < 450) {
          (0, _raf["default"])(frameFunc);
        } else {
          _this.setScrollTop(0);
        }
      };

      (0, _raf["default"])(frameFunc);
      (_this.props.onClick || noop)(e);
    };

    _this.handleScroll = function () {
      var _this$props = _this.props,
          visibilityHeight = _this$props.visibilityHeight,
          _this$props$target = _this$props.target,
          target = _this$props$target === void 0 ? getDefaultTarget : _this$props$target;
      var scrollTop = (0, _getScroll["default"])(target(), true);

      _this.setState({
        visible: scrollTop > visibilityHeight
      });
    };

    _this.renderBackTop = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;
      var _this$props2 = _this.props,
          customizePrefixCls = _this$props2.prefixCls,
          _this$props2$classNam = _this$props2.className,
          className = _this$props2$classNam === void 0 ? '' : _this$props2$classNam,
          children = _this$props2.children;
      var prefixCls = getPrefixCls('back-top', customizePrefixCls);
      var classString = (0, _classnames["default"])(prefixCls, className);
      var defaultElement = React.createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, React.createElement("div", {
        className: "".concat(prefixCls, "-icon")
      })); // fix https://fb.me/react-unknown-prop

      var divProps = (0, _omit["default"])(_this.props, ['prefixCls', 'className', 'children', 'visibilityHeight', 'target', 'visible']);
      var visible = 'visible' in _this.props ? _this.props.visible : _this.state.visible;
      var backTopBtn = visible ? React.createElement("div", _extends({}, divProps, {
        className: classString,
        onClick: _this.scrollToTop
      }), children || defaultElement) : null;
      return React.createElement(_rcAnimate["default"], {
        component: "",
        transitionName: "fade"
      }, backTopBtn);
    };

    _this.state = {
      visible: false
    };
    return _this;
  }

  _createClass(BackTop, [{
    key: "setScrollTop",
    value: function setScrollTop(value) {
      var getTarget = this.props.target || getDefaultTarget;
      var targetNode = getTarget();

      if (targetNode === window) {
        document.body.scrollTop = value;
        document.documentElement.scrollTop = value;
      } else {
        targetNode.scrollTop = value;
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var getTarget = this.props.target || getDefaultTarget;
      this.scrollEvent = (0, _addEventListener["default"])(getTarget(), 'scroll', this.handleScroll);
      this.handleScroll();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.scrollEvent) {
        this.scrollEvent.remove();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderBackTop);
    }
  }]);

  return BackTop;
}(React.Component);

exports["default"] = BackTop;
BackTop.defaultProps = {
  visibilityHeight: 400
};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/antd/lib/back-top/style/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/antd/lib/back-top/style/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.less */ "./node_modules/antd/lib/style/index.less");

__webpack_require__(/*! ./index.less */ "./node_modules/antd/lib/back-top/style/index.less");
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/rc-util/lib/Dom/addEventListener.js":
/*!**********************************************************!*\
  !*** ./node_modules/rc-util/lib/Dom/addEventListener.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = addEventListenerWrap;

var _addDomEventListener = __webpack_require__(/*! add-dom-event-listener */ "./node_modules/add-dom-event-listener/lib/index.js");

var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function addEventListenerWrap(target, eventType, cb, option) {
  /* eslint camelcase: 2 */
  var callback = _reactDom2['default'].unstable_batchedUpdates ? function run(e) {
    _reactDom2['default'].unstable_batchedUpdates(cb, e);
  } : cb;
  return (0, _addDomEventListener2['default'])(target, eventType, callback, option);
}
module.exports = exports['default'];

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_back_top_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/back-top/style */ "./node_modules/antd/lib/back-top/style/index.js");
/* harmony import */ var antd_lib_back_top_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_back_top_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_back_top__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/back-top */ "./node_modules/antd/lib/back-top/index.js");
/* harmony import */ var antd_lib_back_top__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_back_top__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/card/style */ "./node_modules/antd/lib/card/style/index.js");
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_carousel_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/carousel/style */ "./node_modules/antd/lib/carousel/style/index.js");
/* harmony import */ var antd_lib_carousel_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_carousel_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/carousel */ "./node_modules/antd/lib/carousel/index.js");
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_breadcrumb_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/breadcrumb/style */ "./node_modules/antd/lib/breadcrumb/style/index.js");
/* harmony import */ var antd_lib_breadcrumb_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/breadcrumb */ "./node_modules/antd/lib/breadcrumb/index.js");
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/avatar/style */ "./node_modules/antd/lib/avatar/style/index.js");
/* harmony import */ var antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/avatar */ "./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/row/style */ "./node_modules/antd/lib/row/style/index.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/icon/style */ "./node_modules/antd/lib/icon/style/index.js");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd/lib/col/style */ "./node_modules/antd/lib/col/style/index.js");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! antd/lib/layout/style */ "./node_modules/antd/lib/layout/style/index.js");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../style.less */ "./style.less");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_22__);




















var _jsxFileName = "D:\\gitTest\\burger-nextjs-ant\\pages\\index.js";



var Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_19___default.a.Header,
    Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_19___default.a.Content;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_19___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_13___default.a, {
    justify: "space-around",
    type: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    span: 20,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_13___default.a, {
    justify: "space-around",
    type: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    span: 12,
    md: 12,
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Welcome to ABC Burger")), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    span: 12,
    md: 12,
    xs: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("span", {
    className: "ml-30 float-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_15___default.a, {
    type: "phone",
    theme: "filled",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), " Call us 09-090-90909")))))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_13___default.a, {
    justify: "space-around",
    type: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    span: 20,
    style: {
      textAlign: 'right',
      height: 50,
      display: 'flex',
      justifyContent: 'flex-end',
      textTransform: 'uppercase'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
    style: {
      width: 'fit-content',
      margin: 'auto 0px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_21___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Home"))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
    style: {
      width: 'fit-content',
      margin: 'auto 0px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_21___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Product"))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
    style: {
      width: 'fit-content',
      margin: 'auto 0px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_21___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "About us"))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
    style: {
      width: 'fit-content',
      margin: 'auto 0px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_21___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_11___default.a, {
    icon: "user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })))))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_13___default.a, {
    justify: "space-around",
    type: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    span: 20,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_9___default.a.Item, {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_15___default.a, {
    type: "home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_9___default.a.Item, {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_15___default.a, {
    type: "user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Home"))))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_13___default.a, {
    justify: "space-around",
    type: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    span: 20,
    style: {
      paddingTop: '30px',
      paddingBottom: '30px',
      minHeight: '500px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_7___default.a, {
    autoplay: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("img", {
    src: "/static/images/big-images.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("img", {
    src: "/static/images/big-images-2.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("img", {
    src: "/static/images/big-images-3.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_13___default.a, {
    gutter: 16,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    span: 6,
    md: 6,
    sm: 12,
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a, {
    hoverable: true,
    cover: react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("img", {
      alt: "image1",
      style: {
        width: '100%'
      },
      src: "/static/images/burger1.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    span: 18,
    md: 18,
    sm: 12,
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a.Meta, {
    title: "Menu 1",
    description: "burger with patty and cheese",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    span: 6,
    md: 6,
    sm: 12,
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      marginTop: "10px",
      marginLeft: "10px"
    },
    type: "danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "BUY"))))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    span: 6,
    md: 6,
    sm: 12,
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a, {
    hoverable: true,
    cover: react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("img", {
      alt: "image2",
      style: {
        width: '100%'
      },
      src: "/static/images/burger2.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    span: 18,
    md: 18,
    sm: 12,
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a.Meta, {
    title: "Menu 2",
    description: "burger with tomato and onion",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    span: 6,
    md: 6,
    sm: 12,
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      marginTop: "10px",
      marginLeft: "10px"
    },
    type: "danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "BUY"))))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    span: 6,
    md: 6,
    sm: 12,
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a, {
    hoverable: true,
    cover: react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("img", {
      alt: "image3",
      style: {
        width: '100%'
      },
      src: "/static/images/burger3.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    span: 18,
    md: 18,
    sm: 12,
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a.Meta, {
    title: "Menu 3",
    description: "burger on white ceramic plate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    span: 6,
    md: 6,
    sm: 12,
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      marginTop: "10px",
      marginLeft: "10px"
    },
    type: "danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "BUY"))))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    span: 6,
    md: 6,
    sm: 12,
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a, {
    hoverable: true,
    cover: react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("img", {
      alt: "image4",
      style: {
        width: '100%'
      },
      src: "/static/images/burger4.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    span: 18,
    md: 18,
    sm: 12,
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a.Meta, {
    title: "Menu 4",
    description: "burger with vegetables",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    span: 6,
    md: 6,
    sm: 12,
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      marginTop: "10px",
      marginLeft: "10px"
    },
    type: "danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, "BUY"))))))))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_13___default.a, {
    justify: "space-around",
    type: "flex",
    style: {
      background: '#f9f9f9'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    md: 8,
    xs: 20,
    style: {
      height: '40px',
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
    style: {
      margin: 'auto 0px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, "\xA9 2019 nextjs antd-design")), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    md: 8,
    xs: 20,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
    style: {
      margin: 'auto',
      height: '40px',
      display: 'flex',
      justifyContent: 'flex-end'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_15___default.a, {
    style: {
      margin: 'auto 10px',
      fontSize: 20
    },
    type: "facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_15___default.a, {
    style: {
      margin: 'auto 10px',
      fontSize: 20
    },
    type: "instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_15___default.a, {
    style: {
      margin: 'auto 10px',
      fontSize: 20
    },
    type: "google",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_back_top__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }), "Scroll down to see the bottom-right", react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("strong", {
    style: {
      color: 'rgba(64, 64, 64, 0.6)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, " gray "), "button."));
});

/***/ })

})
//# sourceMappingURL=index.js.089b0318fac01ad72eda.hot-update.js.map
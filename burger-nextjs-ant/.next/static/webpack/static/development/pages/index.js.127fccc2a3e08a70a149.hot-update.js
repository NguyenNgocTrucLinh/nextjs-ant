webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/antd/lib/dropdown/dropdown-button.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/dropdown/dropdown-button.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _button = _interopRequireDefault(__webpack_require__(/*! ../button */ "./node_modules/antd/lib/button/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _dropdown = _interopRequireDefault(__webpack_require__(/*! ./dropdown */ "./node_modules/antd/lib/dropdown/dropdown.js"));

var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ "./node_modules/antd/lib/icon/index.js"));

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

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var ButtonGroup = _button["default"].Group;

var DropdownButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropdownButton, _React$Component);

  function DropdownButton() {
    var _this;

    _classCallCheck(this, DropdownButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DropdownButton).apply(this, arguments));

    _this.renderButton = function (_ref) {
      var getContextPopupContainer = _ref.getPopupContainer,
          getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          type = _a.type,
          disabled = _a.disabled,
          onClick = _a.onClick,
          htmlType = _a.htmlType,
          children = _a.children,
          className = _a.className,
          overlay = _a.overlay,
          trigger = _a.trigger,
          align = _a.align,
          visible = _a.visible,
          onVisibleChange = _a.onVisibleChange,
          placement = _a.placement,
          getPopupContainer = _a.getPopupContainer,
          href = _a.href,
          _a$icon = _a.icon,
          icon = _a$icon === void 0 ? React.createElement(_icon["default"], {
        type: "ellipsis"
      }) : _a$icon,
          restProps = __rest(_a, ["prefixCls", "type", "disabled", "onClick", "htmlType", "children", "className", "overlay", "trigger", "align", "visible", "onVisibleChange", "placement", "getPopupContainer", "href", "icon"]);

      var prefixCls = getPrefixCls('dropdown-button', customizePrefixCls);
      var dropdownProps = {
        align: align,
        overlay: overlay,
        disabled: disabled,
        trigger: disabled ? [] : trigger,
        onVisibleChange: onVisibleChange,
        placement: placement,
        getPopupContainer: getPopupContainer || getContextPopupContainer
      };

      if ('visible' in _this.props) {
        dropdownProps.visible = visible;
      }

      return React.createElement(ButtonGroup, _extends({}, restProps, {
        className: (0, _classnames["default"])(prefixCls, className)
      }), React.createElement(_button["default"], {
        type: type,
        disabled: disabled,
        onClick: onClick,
        htmlType: htmlType,
        href: href
      }, children), React.createElement(_dropdown["default"], dropdownProps, React.createElement(_button["default"], {
        type: type
      }, icon)));
    };

    return _this;
  }

  _createClass(DropdownButton, [{
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderButton);
    }
  }]);

  return DropdownButton;
}(React.Component);

exports["default"] = DropdownButton;
DropdownButton.defaultProps = {
  placement: 'bottomRight',
  type: 'default'
};
//# sourceMappingURL=dropdown-button.js.map


/***/ }),

/***/ "./node_modules/antd/lib/dropdown/index.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/dropdown/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dropdown = _interopRequireDefault(__webpack_require__(/*! ./dropdown */ "./node_modules/antd/lib/dropdown/dropdown.js"));

var _dropdownButton = _interopRequireDefault(__webpack_require__(/*! ./dropdown-button */ "./node_modules/antd/lib/dropdown/dropdown-button.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dropdown["default"].Button = _dropdownButton["default"];
var _default = _dropdown["default"];
exports["default"] = _default;
//# sourceMappingURL=index.js.map


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
/* harmony import */ var antd_lib_dropdown_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/dropdown/style */ "./node_modules/antd/lib/dropdown/style/index.js");
/* harmony import */ var antd_lib_dropdown_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/dropdown */ "./node_modules/antd/lib/dropdown/index.js");
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_11__);
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
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! antd/lib/menu/style */ "./node_modules/antd/lib/menu/style/index.js");
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! antd/lib/layout/style */ "./node_modules/antd/lib/layout/style/index.js");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../style.less */ "./style.less");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_24__);






















var _jsxFileName = "D:\\gitTest\\burger-nextjs-ant\\pages\\index.js";



var Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_21___default.a.Header,
    Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_21___default.a.Content;
var menu = react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_19___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_19___default.a.Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("a", {
  target: "_blank",
  rel: "noopener noreferrer",
  href: "http://www.alipay.com/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, "Login")), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_19___default.a.Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("a", {
  target: "_blank",
  rel: "noopener noreferrer",
  href: "http://www.taobao.com/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, "Sign Up")));
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_21___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_13___default.a, {
    justify: "space-around",
    type: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    span: 20,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_13___default.a, {
    justify: "space-around",
    type: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    span: 12,
    md: 12,
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Welcome to ABC Burger")), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    span: 12,
    md: 12,
    xs: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("span", {
    className: "ml-30 float-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_15___default.a, {
    type: "phone",
    theme: "filled",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), " Call us 09-090-90909")))))), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_13___default.a, {
    justify: "space-around",
    type: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
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
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("div", {
    style: {
      width: 'fit-content',
      margin: 'auto 0px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_23___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Home"))), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("div", {
    style: {
      width: 'fit-content',
      margin: 'auto 0px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_23___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Product"))), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("div", {
    style: {
      width: 'fit-content',
      margin: 'auto 0px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_23___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "About us"))), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("div", {
    style: {
      width: 'fit-content',
      margin: 'auto 0px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_11___default.a, {
    overlay: menu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("a", {
    className: "ant-dropdown-link",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Hover me ", react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_15___default.a, {
    type: "down",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }))), ","))), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_13___default.a, {
    justify: "space-around",
    type: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    span: 20,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_9___default.a.Item, {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_15___default.a, {
    type: "home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_9___default.a.Item, {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_15___default.a, {
    type: "user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Home"))))), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_13___default.a, {
    justify: "space-around",
    type: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    span: 20,
    style: {
      paddingTop: '30px',
      paddingBottom: '30px',
      minHeight: '500px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_7___default.a, {
    autoplay: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("img", {
    src: "/static/images/big-images.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("img", {
    src: "/static/images/big-images-2.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("img", {
    src: "/static/images/big-images-3.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_13___default.a, {
    gutter: 16,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    span: 6,
    md: 6,
    sm: 12,
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a, {
    hoverable: true,
    cover: react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("img", {
      alt: "image1",
      style: {
        width: '100%'
      },
      src: "/static/images/burger1.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    span: 18,
    md: 18,
    sm: 12,
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a.Meta, {
    title: "Menu 1",
    description: "burger with patty and cheese",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    span: 6,
    md: 6,
    sm: 12,
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      marginTop: "10px",
      marginLeft: "10px"
    },
    type: "danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "BUY"))))), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    span: 6,
    md: 6,
    sm: 12,
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a, {
    hoverable: true,
    cover: react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("img", {
      alt: "image2",
      style: {
        width: '100%'
      },
      src: "/static/images/burger2.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    span: 18,
    md: 18,
    sm: 12,
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a.Meta, {
    title: "Menu 2",
    description: "burger with tomato and onion",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    span: 6,
    md: 6,
    sm: 12,
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      marginTop: "10px",
      marginLeft: "10px"
    },
    type: "danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "BUY"))))), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    span: 6,
    md: 6,
    sm: 12,
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a, {
    hoverable: true,
    cover: react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("img", {
      alt: "image3",
      style: {
        width: '100%'
      },
      src: "/static/images/burger3.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    span: 18,
    md: 18,
    sm: 12,
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a.Meta, {
    title: "Menu 3",
    description: "burger on white ceramic plate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    span: 6,
    md: 6,
    sm: 12,
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      marginTop: "10px",
      marginLeft: "10px"
    },
    type: "danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "BUY"))))), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    span: 6,
    md: 6,
    sm: 12,
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a, {
    hoverable: true,
    cover: react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("img", {
      alt: "image4",
      style: {
        width: '100%'
      },
      src: "/static/images/burger4.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    span: 18,
    md: 18,
    sm: 12,
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a.Meta, {
    title: "Menu 4",
    description: "burger with vegetables",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    span: 6,
    md: 6,
    sm: 12,
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      marginTop: "10px",
      marginLeft: "10px"
    },
    type: "danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, "BUY"))))))))), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_13___default.a, {
    justify: "space-around",
    type: "flex",
    style: {
      background: '#f9f9f9'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    md: 8,
    xs: 20,
    style: {
      height: '40px',
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("div", {
    style: {
      margin: 'auto 0px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, "\xA9 2019 nextjs antd-design")), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_17___default.a, {
    md: 8,
    xs: 20,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("div", {
    style: {
      margin: 'auto',
      height: '40px',
      display: 'flex',
      justifyContent: 'flex-end'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_15___default.a, {
    style: {
      margin: 'auto 10px',
      fontSize: 20
    },
    type: "facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_15___default.a, {
    style: {
      margin: 'auto 10px',
      fontSize: 20
    },
    type: "instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_15___default.a, {
    style: {
      margin: 'auto 10px',
      fontSize: 20
    },
    type: "google",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_back_top__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("strong", {
    style: {
      color: 'rgba(64, 64, 64, 0.6)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, " gray ")));
});

/***/ })

})
//# sourceMappingURL=index.js.127fccc2a3e08a70a149.hot-update.js.map
webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/antd/lib/_util/wave.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/_util/wave.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _Event = _interopRequireDefault(__webpack_require__(/*! css-animation/lib/Event */ "./node_modules/css-animation/lib/Event.js"));

var _raf = _interopRequireDefault(__webpack_require__(/*! ../_util/raf */ "./node_modules/antd/lib/_util/raf.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleForPesudo; // Where el is the DOM element you'd like to test for visibility

function isHidden(element) {
  if (false) {}

  return !element || element.offsetParent === null;
}

var Wave =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Wave, _React$Component);

  function Wave() {
    var _this;

    _classCallCheck(this, Wave);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Wave).apply(this, arguments));
    _this.animationStart = false;
    _this.destroy = false;

    _this.onClick = function (node, waveColor) {
      if (!node || isHidden(node) || node.className.indexOf('-leave') >= 0) {
        return;
      }

      var insertExtraNode = _this.props.insertExtraNode;
      _this.extraNode = document.createElement('div');
      var extraNode = _this.extraNode;
      extraNode.className = 'ant-click-animating-node';

      var attributeName = _this.getAttributeName();

      node.setAttribute(attributeName, 'true'); // Not white or transparnt or grey

      styleForPesudo = styleForPesudo || document.createElement('style');

      if (waveColor && waveColor !== '#ffffff' && waveColor !== 'rgb(255, 255, 255)' && _this.isNotGrey(waveColor) && !/rgba\(\d*, \d*, \d*, 0\)/.test(waveColor) && // any transparent rgba color
      waveColor !== 'transparent') {
        // Add nonce if CSP exist
        if (_this.csp && _this.csp.nonce) {
          styleForPesudo.nonce = _this.csp.nonce;
        }

        extraNode.style.borderColor = waveColor;
        styleForPesudo.innerHTML = "\n      [ant-click-animating-without-extra-node='true']::after, .ant-click-animating-node {\n        --antd-wave-shadow-color: ".concat(waveColor, ";\n      }");

        if (!document.body.contains(styleForPesudo)) {
          document.body.appendChild(styleForPesudo);
        }
      }

      if (insertExtraNode) {
        node.appendChild(extraNode);
      }

      _Event["default"].addStartEventListener(node, _this.onTransitionStart);

      _Event["default"].addEndEventListener(node, _this.onTransitionEnd);
    };

    _this.bindAnimationEvent = function (node) {
      if (!node || !node.getAttribute || node.getAttribute('disabled') || node.className.indexOf('disabled') >= 0) {
        return;
      }

      var onClick = function onClick(e) {
        // Fix radio button click twice
        if (e.target.tagName === 'INPUT' || isHidden(e.target)) {
          return;
        }

        _this.resetEffect(node); // Get wave color from target


        var waveColor = getComputedStyle(node).getPropertyValue('border-top-color') || // Firefox Compatible
        getComputedStyle(node).getPropertyValue('border-color') || getComputedStyle(node).getPropertyValue('background-color');
        _this.clickWaveTimeoutId = window.setTimeout(function () {
          return _this.onClick(node, waveColor);
        }, 0);

        _raf["default"].cancel(_this.animationStartId);

        _this.animationStart = true; // Render to trigger transition event cost 3 frames. Let's delay 10 frames to reset this.

        _this.animationStartId = (0, _raf["default"])(function () {
          _this.animationStart = false;
        }, 10);
      };

      node.addEventListener('click', onClick, true);
      return {
        cancel: function cancel() {
          node.removeEventListener('click', onClick, true);
        }
      };
    };

    _this.onTransitionStart = function (e) {
      if (_this.destroy) return;
      var node = (0, _reactDom.findDOMNode)(_assertThisInitialized(_this));

      if (!e || e.target !== node) {
        return;
      }

      if (!_this.animationStart) {
        _this.resetEffect(node);
      }
    };

    _this.onTransitionEnd = function (e) {
      if (!e || e.animationName !== 'fadeEffect') {
        return;
      }

      _this.resetEffect(e.target);
    };

    _this.renderWave = function (_ref) {
      var csp = _ref.csp;
      var children = _this.props.children;
      _this.csp = csp;
      return children;
    };

    return _this;
  }

  _createClass(Wave, [{
    key: "isNotGrey",
    value: function isNotGrey(color) {
      var match = (color || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);

      if (match && match[1] && match[2] && match[3]) {
        return !(match[1] === match[2] && match[2] === match[3]);
      }

      return true;
    }
  }, {
    key: "getAttributeName",
    value: function getAttributeName() {
      var insertExtraNode = this.props.insertExtraNode;
      return insertExtraNode ? 'ant-click-animating' : 'ant-click-animating-without-extra-node';
    }
  }, {
    key: "resetEffect",
    value: function resetEffect(node) {
      if (!node || node === this.extraNode || !(node instanceof Element)) {
        return;
      }

      var insertExtraNode = this.props.insertExtraNode;
      var attributeName = this.getAttributeName();
      node.setAttribute(attributeName, 'false'); // edge has bug on `removeAttribute` #14466

      this.removeExtraStyleNode();

      if (insertExtraNode && this.extraNode && node.contains(this.extraNode)) {
        node.removeChild(this.extraNode);
      }

      _Event["default"].removeStartEventListener(node, this.onTransitionStart);

      _Event["default"].removeEndEventListener(node, this.onTransitionEnd);
    }
  }, {
    key: "removeExtraStyleNode",
    value: function removeExtraStyleNode() {
      if (styleForPesudo) {
        styleForPesudo.innerHTML = '';
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var node = (0, _reactDom.findDOMNode)(this);

      if (!node || node.nodeType !== 1) {
        return;
      }

      this.instance = this.bindAnimationEvent(node);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.instance) {
        this.instance.cancel();
      }

      if (this.clickWaveTimeoutId) {
        clearTimeout(this.clickWaveTimeoutId);
      }

      this.destroy = true;
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderWave);
    }
  }]);

  return Wave;
}(React.Component);

exports["default"] = Wave;
//# sourceMappingURL=wave.js.map


/***/ }),

/***/ "./node_modules/antd/lib/button/button-group.js":
/*!******************************************************!*\
  !*** ./node_modules/antd/lib/button/button-group.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var ButtonGroup = function ButtonGroup(props) {
  return React.createElement(_configProvider.ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;

    var customizePrefixCls = props.prefixCls,
        size = props.size,
        className = props.className,
        others = __rest(props, ["prefixCls", "size", "className"]);

    var prefixCls = getPrefixCls('btn-group', customizePrefixCls); // large => lg
    // small => sm

    var sizeCls = '';

    switch (size) {
      case 'large':
        sizeCls = 'lg';
        break;

      case 'small':
        sizeCls = 'sm';

      default:
        break;
    }

    var classes = (0, _classnames["default"])(prefixCls, _defineProperty({}, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), className);
    return React.createElement("div", _extends({}, others, {
      className: classes
    }));
  });
};

var _default = ButtonGroup;
exports["default"] = _default;
//# sourceMappingURL=button-group.js.map


/***/ }),

/***/ "./node_modules/antd/lib/button/button.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/button/button.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ "./node_modules/antd/lib/icon/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _wave = _interopRequireDefault(__webpack_require__(/*! ../_util/wave */ "./node_modules/antd/lib/_util/wave.js"));

var _type = __webpack_require__(/*! ../_util/type */ "./node_modules/antd/lib/_util/type.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

function isString(str) {
  return typeof str === 'string';
}

function spaceChildren(children, needInserted) {
  var isPrevChildPure = false;
  var childList = [];
  React.Children.forEach(children, function (child) {
    var type = _typeof(child);

    var isCurrentChildPure = type === 'string' || type === 'number';

    if (isPrevChildPure && isCurrentChildPure) {
      var lastIndex = childList.length - 1;
      var lastChild = childList[lastIndex];
      childList[lastIndex] = "".concat(lastChild).concat(child);
    } else {
      childList.push(child);
    }

    isPrevChildPure = isCurrentChildPure;
  }); // Pass to React.Children.map to auto fill key

  return React.Children.map(childList, function (child) {
    return insertSpace(child, needInserted);
  });
} // Insert one space between two chinese characters automatically.


function insertSpace(child, needInserted) {
  // Check the child if is undefined or null.
  if (child == null) {
    return;
  }

  var SPACE = needInserted ? ' ' : ''; // strictNullChecks oops.

  if (typeof child !== 'string' && typeof child !== 'number' && isString(child.type) && isTwoCNChar(child.props.children)) {
    return React.cloneElement(child, {}, child.props.children.split('').join(SPACE));
  }

  if (typeof child === 'string') {
    if (isTwoCNChar(child)) {
      child = child.split('').join(SPACE);
    }

    return React.createElement("span", null, child);
  }

  return child;
}

var ButtonTypes = (0, _type.tuple)('default', 'primary', 'ghost', 'dashed', 'danger', 'link');
var ButtonShapes = (0, _type.tuple)('circle', 'circle-outline', 'round');
var ButtonSizes = (0, _type.tuple)('large', 'default', 'small');
var ButtonHTMLTypes = (0, _type.tuple)('submit', 'button', 'reset');

var Button =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button(props) {
    var _this;

    _classCallCheck(this, Button);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Button).call(this, props));

    _this.saveButtonRef = function (node) {
      _this.buttonNode = node;
    };

    _this.handleClick = function (e) {
      var loading = _this.state.loading;
      var onClick = _this.props.onClick;

      if (!!loading) {
        return;
      }

      if (onClick) {
        onClick(e);
      }
    };

    _this.renderButton = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls,
          autoInsertSpaceInButton = _ref.autoInsertSpaceInButton;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          type = _a.type,
          shape = _a.shape,
          size = _a.size,
          className = _a.className,
          children = _a.children,
          icon = _a.icon,
          ghost = _a.ghost,
          _loadingProp = _a.loading,
          block = _a.block,
          rest = __rest(_a, ["prefixCls", "type", "shape", "size", "className", "children", "icon", "ghost", "loading", "block"]);

      var _this$state = _this.state,
          loading = _this$state.loading,
          hasTwoCNChar = _this$state.hasTwoCNChar;
      var prefixCls = getPrefixCls('btn', customizePrefixCls);
      var autoInsertSpace = autoInsertSpaceInButton !== false; // large => lg
      // small => sm

      var sizeCls = '';

      switch (size) {
        case 'large':
          sizeCls = 'lg';
          break;

        case 'small':
          sizeCls = 'sm';
          break;

        default:
          break;
      }

      var classes = (0, _classnames["default"])(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(type), type), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(shape), shape), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), _defineProperty(_classNames, "".concat(prefixCls, "-icon-only"), !children && children !== 0 && icon), _defineProperty(_classNames, "".concat(prefixCls, "-loading"), loading), _defineProperty(_classNames, "".concat(prefixCls, "-background-ghost"), ghost), _defineProperty(_classNames, "".concat(prefixCls, "-two-chinese-chars"), hasTwoCNChar && autoInsertSpace), _defineProperty(_classNames, "".concat(prefixCls, "-block"), block), _classNames));
      var iconType = loading ? 'loading' : icon;
      var iconNode = iconType ? React.createElement(_icon["default"], {
        type: iconType
      }) : null;
      var kids = children || children === 0 ? spaceChildren(children, _this.isNeedInserted() && autoInsertSpace) : null;
      var linkButtonRestProps = (0, _omit["default"])(rest, ['htmlType']);

      if (linkButtonRestProps.href !== undefined) {
        return React.createElement("a", _extends({}, linkButtonRestProps, {
          className: classes,
          onClick: _this.handleClick,
          ref: _this.saveButtonRef
        }), iconNode, kids);
      } // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.


      var _b = rest,
          htmlType = _b.htmlType,
          otherProps = __rest(_b, ["htmlType"]);

      var buttonNode = React.createElement("button", _extends({}, otherProps, {
        type: htmlType,
        className: classes,
        onClick: _this.handleClick,
        ref: _this.saveButtonRef
      }), iconNode, kids);

      if (type === 'link') {
        return buttonNode;
      }

      return React.createElement(_wave["default"], null, buttonNode);
    };

    _this.state = {
      loading: props.loading,
      hasTwoCNChar: false
    };
    return _this;
  }

  _createClass(Button, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fixTwoCNChar();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      this.fixTwoCNChar();

      if (prevProps.loading && typeof prevProps.loading !== 'boolean') {
        clearTimeout(this.delayTimeout);
      }

      var loading = this.props.loading;

      if (loading && typeof loading !== 'boolean' && loading.delay) {
        this.delayTimeout = window.setTimeout(function () {
          return _this2.setState({
            loading: loading
          });
        }, loading.delay);
      } else if (prevProps.loading === this.props.loading) {
        return;
      } else {
        this.setState({
          loading: loading
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.delayTimeout) {
        clearTimeout(this.delayTimeout);
      }
    }
  }, {
    key: "fixTwoCNChar",
    value: function fixTwoCNChar() {
      // Fix for HOC usage like <FormatMessage />
      if (!this.buttonNode) {
        return;
      }

      var buttonText = this.buttonNode.textContent || this.buttonNode.innerText;

      if (this.isNeedInserted() && isTwoCNChar(buttonText)) {
        if (!this.state.hasTwoCNChar) {
          this.setState({
            hasTwoCNChar: true
          });
        }
      } else if (this.state.hasTwoCNChar) {
        this.setState({
          hasTwoCNChar: false
        });
      }
    }
  }, {
    key: "isNeedInserted",
    value: function isNeedInserted() {
      var _this$props = this.props,
          icon = _this$props.icon,
          children = _this$props.children;
      return React.Children.count(children) === 1 && !icon;
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderButton);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.loading instanceof Boolean) {
        return _extends({}, prevState, {
          loading: nextProps.loading
        });
      }

      return null;
    }
  }]);

  return Button;
}(React.Component);

Button.__ANT_BUTTON = true;
Button.defaultProps = {
  loading: false,
  ghost: false,
  block: false,
  htmlType: 'button'
};
Button.propTypes = {
  type: PropTypes.string,
  shape: PropTypes.oneOf(ButtonShapes),
  size: PropTypes.oneOf(ButtonSizes),
  htmlType: PropTypes.oneOf(ButtonHTMLTypes),
  onClick: PropTypes.func,
  loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  className: PropTypes.string,
  icon: PropTypes.string,
  block: PropTypes.bool
};
(0, _reactLifecyclesCompat.polyfill)(Button);
var _default = Button;
exports["default"] = _default;
//# sourceMappingURL=button.js.map


/***/ }),

/***/ "./node_modules/antd/lib/button/index.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/button/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _button = _interopRequireDefault(__webpack_require__(/*! ./button */ "./node_modules/antd/lib/button/button.js"));

var _buttonGroup = _interopRequireDefault(__webpack_require__(/*! ./button-group */ "./node_modules/antd/lib/button/button-group.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_button["default"].Group = _buttonGroup["default"];
var _default = _button["default"];
exports["default"] = _default;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/css-animation/lib/Event.js":
/*!*************************************************!*\
  !*** ./node_modules/css-animation/lib/Event.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var START_EVENT_NAME_MAP = {
  transitionstart: {
    transition: 'transitionstart',
    WebkitTransition: 'webkitTransitionStart',
    MozTransition: 'mozTransitionStart',
    OTransition: 'oTransitionStart',
    msTransition: 'MSTransitionStart'
  },

  animationstart: {
    animation: 'animationstart',
    WebkitAnimation: 'webkitAnimationStart',
    MozAnimation: 'mozAnimationStart',
    OAnimation: 'oAnimationStart',
    msAnimation: 'MSAnimationStart'
  }
};

var END_EVENT_NAME_MAP = {
  transitionend: {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd'
  },

  animationend: {
    animation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    OAnimation: 'oAnimationEnd',
    msAnimation: 'MSAnimationEnd'
  }
};

var startEvents = [];
var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  if (!('AnimationEvent' in window)) {
    delete START_EVENT_NAME_MAP.animationstart.animation;
    delete END_EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete START_EVENT_NAME_MAP.transitionstart.transition;
    delete END_EVENT_NAME_MAP.transitionend.transition;
  }

  function process(EVENT_NAME_MAP, events) {
    for (var baseEventName in EVENT_NAME_MAP) {
      if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
        var baseEvents = EVENT_NAME_MAP[baseEventName];
        for (var styleName in baseEvents) {
          if (styleName in style) {
            events.push(baseEvents[styleName]);
            break;
          }
        }
      }
    }
  }

  process(START_EVENT_NAME_MAP, startEvents);
  process(END_EVENT_NAME_MAP, endEvents);
}

if ( true && typeof document !== 'undefined') {
  detectEvents();
}

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var TransitionEvents = {
  // Start events
  startEvents: startEvents,

  addStartEventListener: function addStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    startEvents.forEach(function (startEvent) {
      addEventListener(node, startEvent, eventListener);
    });
  },
  removeStartEventListener: function removeStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      return;
    }
    startEvents.forEach(function (startEvent) {
      removeEventListener(node, startEvent, eventListener);
    });
  },


  // End events
  endEvents: endEvents,

  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },
  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

exports['default'] = TransitionEvents;
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
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/card/style */ "./node_modules/antd/lib/card/style/index.js");
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_carousel_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/carousel/style */ "./node_modules/antd/lib/carousel/style/index.js");
/* harmony import */ var antd_lib_carousel_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_carousel_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/carousel */ "./node_modules/antd/lib/carousel/index.js");
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_breadcrumb_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/breadcrumb/style */ "./node_modules/antd/lib/breadcrumb/style/index.js");
/* harmony import */ var antd_lib_breadcrumb_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/breadcrumb */ "./node_modules/antd/lib/breadcrumb/index.js");
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/row/style */ "./node_modules/antd/lib/row/style/index.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/icon/style */ "./node_modules/antd/lib/icon/style/index.js");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/col/style */ "./node_modules/antd/lib/col/style/index.js");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/layout/style */ "./node_modules/antd/lib/layout/style/index.js");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../style.less */ "./style.less");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_18__);
















var _jsxFileName = "D:\\gitTest\\burger-nextjs-ant\\pages\\index.js";



var Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_15___default.a.Header,
    Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_15___default.a.Content;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_9___default.a, {
    justify: "space-around",
    type: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
    span: 20,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_9___default.a, {
    justify: "space-around",
    type: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
    span: 12,
    md: 12,
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Welcome to ABC Burger")), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
    span: 12,
    md: 12,
    xs: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("span", {
    className: "ml-30 float-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_11___default.a, {
    type: "phone",
    theme: "filled",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), " Call us 09-999-9999")))))), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_9___default.a, {
    justify: "space-around",
    type: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
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
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
    style: {
      width: 'fit-content',
      margin: 'auto 0px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_17___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Home"))), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
    style: {
      width: 'fit-content',
      margin: 'auto 0px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_17___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Product"))), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
    style: {
      width: 'fit-content',
      margin: 'auto 0px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_17___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "About us"))))), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_9___default.a, {
    justify: "space-around",
    type: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
    span: 20,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_11___default.a, {
    type: "home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_11___default.a, {
    type: "user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Home"))))), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_9___default.a, {
    justify: "space-around",
    type: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
    span: 20,
    style: {
      paddingTop: '30px',
      paddingBottom: '30px',
      minHeight: '500px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_5___default.a, {
    autoplay: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("img", {
    src: "/static/images/big-images.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("img", {
    src: "/static/images/big-images-2.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("img", {
    src: "/static/images/big-images-3.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_9___default.a, {
    gutter: 16,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
    span: 6,
    md: 6,
    sm: 12,
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_3___default.a, {
    hoverable: true,
    cover: react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("img", {
      alt: "image1",
      style: {
        width: '100%'
      },
      src: "/static/images/burger1.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
    span: 18,
    md: 18,
    sm: 12,
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_3___default.a.Meta, {
    title: "Menu 1",
    description: "burger with patty and cheese",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
    span: 6,
    md: 6,
    sm: 12,
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "Danger"))))), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
    span: 6,
    md: 6,
    sm: 12,
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_3___default.a, {
    hoverable: true,
    cover: react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("img", {
      alt: "image2",
      style: {
        width: '100%'
      },
      src: "/static/images/burger2.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_3___default.a.Meta, {
    title: "Menu 2",
    description: "burger with tomato and onion",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
    span: 6,
    md: 6,
    sm: 12,
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_3___default.a, {
    hoverable: true,
    cover: react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("img", {
      alt: "image3",
      style: {
        width: '100%'
      },
      src: "/static/images/burger3.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_3___default.a.Meta, {
    title: "Menu 3",
    description: "burger on white ceramic plate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
    span: 6,
    md: 6,
    sm: 12,
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_3___default.a, {
    hoverable: true,
    cover: react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("img", {
      alt: "image4",
      style: {
        width: '100%'
      },
      src: "/static/images/burger4.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_3___default.a.Meta, {
    title: "Menu 4",
    description: "burger with vegetables",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }))))))), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_9___default.a, {
    justify: "space-around",
    type: "flex",
    style: {
      background: '#f9f9f9'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
    md: 8,
    xs: 20,
    style: {
      height: '40px',
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
    style: {
      margin: 'auto 0px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "\xA9 2019 nextjs antd-design")), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
    md: 8,
    xs: 20,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
    style: {
      margin: 'auto',
      height: '40px',
      display: 'flex',
      justifyContent: 'flex-end'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_11___default.a, {
    style: {
      margin: 'auto 10px',
      fontSize: 20
    },
    type: "facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_11___default.a, {
    style: {
      margin: 'auto 10px',
      fontSize: 20
    },
    type: "instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_11___default.a, {
    style: {
      margin: 'auto 10px',
      fontSize: 20
    },
    type: "google",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  })))));
});

/***/ })

})
//# sourceMappingURL=index.js.292b90f4ee13b0523e39.hot-update.js.map
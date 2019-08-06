module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver =  false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor() {
    super(...arguments);

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.props.prefetch && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.props.prefetch || "undefined" === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => this.handleRef(el),
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;
Link.defaultProps = {
  prefetch: true
};

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
const propertyFields = ['components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
propertyFields.concat(urlPropertyFields).forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  propertyFields.forEach(field => {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get() {
        return _router[field];
      }

    });
  });
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_back_top_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/back-top/style */ "antd/lib/back-top/style");
/* harmony import */ var antd_lib_back_top_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_back_top_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_back_top__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/back-top */ "antd/lib/back-top");
/* harmony import */ var antd_lib_back_top__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_back_top__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/card/style */ "antd/lib/card/style");
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_carousel_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/carousel/style */ "antd/lib/carousel/style");
/* harmony import */ var antd_lib_carousel_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_carousel_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/carousel */ "antd/lib/carousel");
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_breadcrumb_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/breadcrumb/style */ "antd/lib/breadcrumb/style");
/* harmony import */ var antd_lib_breadcrumb_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/breadcrumb */ "antd/lib/breadcrumb");
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_dropdown_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/dropdown/style */ "antd/lib/dropdown/style");
/* harmony import */ var antd_lib_dropdown_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/dropdown */ "antd/lib/dropdown");
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/avatar/style */ "antd/lib/avatar/style");
/* harmony import */ var antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/avatar */ "antd/lib/avatar");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd/lib/icon/style */ "antd/lib/icon/style");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! antd/lib/menu/style */ "antd/lib/menu/style");
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! antd/lib/layout/style */ "antd/lib/layout/style");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../style.less */ "./style.less");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_26__);
























var _jsxFileName = "D:\\gitTest\\burger-nextjs-ant\\pages\\index.js";



const {
  Header,
  Content
} = antd_lib_layout__WEBPACK_IMPORTED_MODULE_23___default.a;
const menu = react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_21___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_21___default.a.Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("a", {
  target: "_blank",
  rel: "noopener noreferrer",
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, "Login")), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_21___default.a.Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("a", {
  target: "_blank",
  rel: "noopener noreferrer",
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, "Sign Up")));
/* harmony default export */ __webpack_exports__["default"] = (() => react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_23___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(Header, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_15___default.a, {
  justify: "space-around",
  type: "flex",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_19___default.a, {
  span: 20,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_15___default.a, {
  justify: "space-around",
  type: "flex",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_19___default.a, {
  span: 12,
  md: 12,
  xs: 24,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, "Welcome to ABC Burger")), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_19___default.a, {
  span: 12,
  md: 12,
  xs: 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("span", {
  className: "ml-30 float-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_17___default.a, {
  type: "phone",
  theme: "filled",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}), " Call us 09-090-90909")))))), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_15___default.a, {
  justify: "space-around",
  type: "flex",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_19___default.a, {
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
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("div", {
  style: {
    width: 'fit-content',
    margin: 'auto 0px'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_25___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, "Home"))), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("div", {
  style: {
    width: 'fit-content',
    margin: 'auto 0px'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_25___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, "Product"))), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("div", {
  style: {
    width: 'fit-content',
    margin: 'auto 0px'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_25___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}, "About us"))), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("div", {
  style: {
    width: 'fit-content',
    margin: 'auto 0px'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_11___default.a, {
  overlay: menu,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("a", {
  className: "ant-dropdown-link",
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_13___default.a, {
  icon: "user",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68
  },
  __self: undefined
})))))), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_15___default.a, {
  justify: "space-around",
  type: "flex",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_19___default.a, {
  span: 20,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_9___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_9___default.a.Item, {
  href: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_17___default.a, {
  type: "home",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_9___default.a.Item, {
  href: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_17___default.a, {
  type: "user",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83
  },
  __self: undefined
}, "Home"))))), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_15___default.a, {
  justify: "space-around",
  type: "flex",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_19___default.a, {
  span: 20,
  style: {
    paddingTop: '30px',
    paddingBottom: '30px',
    minHeight: '500px'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(Content, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_7___default.a, {
  autoplay: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("img", {
  src: "/static/images/big-images.jpg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96
  },
  __self: undefined
}))), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("img", {
  src: "/static/images/big-images-2.jpg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101
  },
  __self: undefined
}))), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("img", {
  src: "/static/images/big-images-3.jpg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106
  },
  __self: undefined
}))))), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_15___default.a, {
  gutter: 16,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 111
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_19___default.a, {
  span: 6,
  md: 6,
  sm: 12,
  xs: 24,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 112
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a, {
  hoverable: true,
  cover: react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("img", {
    alt: "image1",
    style: {
      width: '100%'
    },
    src: "/static/images/burger1.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_15___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 119
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_19___default.a, {
  span: 18,
  md: 18,
  sm: 12,
  xs: 24,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 120
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a.Meta, {
  title: "Menu 1",
  description: "burger with patty and cheese",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 121
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_19___default.a, {
  span: 6,
  md: 6,
  sm: 12,
  xs: 24,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 126
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
  style: {
    marginTop: "10px",
    marginLeft: "10px"
  },
  type: "danger",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 127
  },
  __self: undefined
}, "Detail"))))), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_19___default.a, {
  span: 6,
  md: 6,
  sm: 12,
  xs: 24,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 135
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a, {
  hoverable: true,
  cover: react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("img", {
    alt: "image2",
    style: {
      width: '100%'
    },
    src: "/static/images/burger2.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 136
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_15___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 142
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_19___default.a, {
  span: 18,
  md: 18,
  sm: 12,
  xs: 24,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 143
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a.Meta, {
  title: "Menu 2",
  description: "burger with tomato and onion",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 144
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_19___default.a, {
  span: 6,
  md: 6,
  sm: 12,
  xs: 24,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 149
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
  style: {
    marginTop: "10px",
    marginLeft: "10px"
  },
  type: "danger",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 150
  },
  __self: undefined
}, "Detail"))))), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_19___default.a, {
  span: 6,
  md: 6,
  sm: 12,
  xs: 24,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 157
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a, {
  hoverable: true,
  cover: react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("img", {
    alt: "image3",
    style: {
      width: '100%'
    },
    src: "/static/images/burger3.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: undefined
  }),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 158
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_15___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 163
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_19___default.a, {
  span: 18,
  md: 18,
  sm: 12,
  xs: 24,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 164
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a.Meta, {
  title: "Menu 3",
  description: "burger on white ceramic plate",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 165
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_19___default.a, {
  span: 6,
  md: 6,
  sm: 12,
  xs: 24,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 170
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
  style: {
    marginTop: "10px",
    marginLeft: "10px"
  },
  type: "danger",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 171
  },
  __self: undefined
}, "Detail"))))), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_19___default.a, {
  span: 6,
  md: 6,
  sm: 12,
  xs: 24,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 178
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a, {
  hoverable: true,
  cover: react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("img", {
    alt: "image4",
    style: {
      width: '100%'
    },
    src: "/static/images/burger4.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: undefined
  }),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 179
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_15___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 184
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_19___default.a, {
  span: 18,
  md: 18,
  sm: 12,
  xs: 24,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 185
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a.Meta, {
  title: "Menu 4",
  description: "burger with vegetables",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 186
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_19___default.a, {
  span: 6,
  md: 6,
  sm: 12,
  xs: 24,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 191
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
  style: {
    marginTop: "10px",
    marginLeft: "10px"
  },
  type: "danger",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 192
  },
  __self: undefined
}, "Detail"))))))))), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_15___default.a, {
  justify: "space-around",
  type: "flex",
  style: {
    background: '#f9f9f9'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 204
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_19___default.a, {
  md: 8,
  xs: 20,
  style: {
    height: '40px',
    display: 'flex'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 205
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("div", {
  style: {
    margin: 'auto 0px'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 206
  },
  __self: undefined
}, "\xA9 2019 nextjs antd-design")), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_19___default.a, {
  md: 8,
  xs: 20,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 210
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("div", {
  style: {
    margin: 'auto',
    height: '40px',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 211
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_17___default.a, {
  style: {
    margin: 'auto 10px',
    fontSize: 20
  },
  type: "facebook",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 212
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_17___default.a, {
  style: {
    margin: 'auto 10px',
    fontSize: 20
  },
  type: "instagram",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 213
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_17___default.a, {
  style: {
    margin: 'auto 10px',
    fontSize: 20
  },
  type: "google",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 214
  },
  __self: undefined
})))), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 219
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(antd_lib_back_top__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 220
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("strong", {
  style: {
    color: 'rgba(64, 64, 64, 0.6)'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 221
  },
  __self: undefined
}, " gray "))));

/***/ }),

/***/ "./style.less":
/*!********************!*\
  !*** ./style.less ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\gitTest\burger-nextjs-ant\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "antd/lib/avatar":
/*!**********************************!*\
  !*** external "antd/lib/avatar" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar");

/***/ }),

/***/ "antd/lib/avatar/style":
/*!****************************************!*\
  !*** external "antd/lib/avatar/style" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar/style");

/***/ }),

/***/ "antd/lib/back-top":
/*!************************************!*\
  !*** external "antd/lib/back-top" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/back-top");

/***/ }),

/***/ "antd/lib/back-top/style":
/*!******************************************!*\
  !*** external "antd/lib/back-top/style" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/back-top/style");

/***/ }),

/***/ "antd/lib/breadcrumb":
/*!**************************************!*\
  !*** external "antd/lib/breadcrumb" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/breadcrumb");

/***/ }),

/***/ "antd/lib/breadcrumb/style":
/*!********************************************!*\
  !*** external "antd/lib/breadcrumb/style" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/breadcrumb/style");

/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/button/style":
/*!****************************************!*\
  !*** external "antd/lib/button/style" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button/style");

/***/ }),

/***/ "antd/lib/card":
/*!********************************!*\
  !*** external "antd/lib/card" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

/***/ }),

/***/ "antd/lib/card/style":
/*!**************************************!*\
  !*** external "antd/lib/card/style" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/card/style");

/***/ }),

/***/ "antd/lib/carousel":
/*!************************************!*\
  !*** external "antd/lib/carousel" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/carousel");

/***/ }),

/***/ "antd/lib/carousel/style":
/*!******************************************!*\
  !*** external "antd/lib/carousel/style" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/carousel/style");

/***/ }),

/***/ "antd/lib/col":
/*!*******************************!*\
  !*** external "antd/lib/col" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/col/style":
/*!*************************************!*\
  !*** external "antd/lib/col/style" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col/style");

/***/ }),

/***/ "antd/lib/dropdown":
/*!************************************!*\
  !*** external "antd/lib/dropdown" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/dropdown");

/***/ }),

/***/ "antd/lib/dropdown/style":
/*!******************************************!*\
  !*** external "antd/lib/dropdown/style" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/dropdown/style");

/***/ }),

/***/ "antd/lib/icon":
/*!********************************!*\
  !*** external "antd/lib/icon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/icon/style":
/*!**************************************!*\
  !*** external "antd/lib/icon/style" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon/style");

/***/ }),

/***/ "antd/lib/layout":
/*!**********************************!*\
  !*** external "antd/lib/layout" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "antd/lib/layout/style":
/*!****************************************!*\
  !*** external "antd/lib/layout/style" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout/style");

/***/ }),

/***/ "antd/lib/menu":
/*!********************************!*\
  !*** external "antd/lib/menu" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "antd/lib/menu/style":
/*!**************************************!*\
  !*** external "antd/lib/menu/style" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu/style");

/***/ }),

/***/ "antd/lib/row":
/*!*******************************!*\
  !*** external "antd/lib/row" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "antd/lib/row/style":
/*!*************************************!*\
  !*** external "antd/lib/row/style" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row/style");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
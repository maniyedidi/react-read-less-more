"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./styles.css");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var itemLabel = function itemLabel(element, displayKey) {
  return element !== null && _typeof(element) === "object" ? element[displayKey] : element;
};
var ReactReadLessMore = /*#__PURE__*/function (_React$Component) {
  function ReactReadLessMore(props) {
    var _this;
    _classCallCheck(this, ReactReadLessMore);
    _this = _callSuper(this, ReactReadLessMore, [props]);
    _this.state = {
      showLessFlag: true
    };
    return _this;
  }
  _inherits(ReactReadLessMore, _React$Component);
  return _createClass(ReactReadLessMore, [{
    key: "renderDataItem",
    value: function renderDataItem(element, index) {
      var _this$props = this.props,
        _onClick = _this$props.onClick,
        displayType = _this$props.displayType,
        displayKey = _this$props.displayKey,
        dataSeparator = _this$props.dataSeparator,
        dataItemClass = _this$props.dataItemClass,
        deleteChip = _this$props.deleteChip,
        deleteIcon = _this$props.deleteIcon;
      var label = itemLabel(element, displayKey);
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
        key: "".concat(index, "-").concat(label)
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: displayType === "CHIP" ? "rlm-chip ".concat(dataItemClass || "") : "data-item",
        onClick: function onClick() {
          return _onClick && _onClick(element);
        },
        title: label
      }, label, " ", deleteChip && /*#__PURE__*/_react["default"].createElement("span", {
        className: deleteIcon,
        onClick: function onClick(e) {
          e.stopPropagation();
          deleteChip(element);
        }
      }, "\u2715")), /*#__PURE__*/_react["default"].createElement("span", null, dataSeparator));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var showLessFlag = this.state.showLessFlag;
      var _this$props2 = this.props,
        clsName = _this$props2.clsName,
        moreText = _this$props2.moreText,
        lessText = _this$props2.lessText,
        displayCount = _this$props2.displayCount,
        children = _this$props2.children,
        data = _this$props2.data;
      var childItems = _react["default"].Children.toArray(children);
      var visible = function visible(items) {
        return showLessFlag ? items.slice(0, displayCount) : items;
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: clsName ? "react-read-less-more ".concat(clsName) : "react-read-less-more"
      }, visible(childItems), visible(data || []).map(function (element, index) {
        return _this2.renderDataItem(element, index);
      }), showLessFlag ? /*#__PURE__*/_react["default"].createElement("span", {
        className: "more-label show-less-more",
        onClick: function onClick() {
          return _this2.setState({
            showLessFlag: false
          });
        }
      }, moreText) : /*#__PURE__*/_react["default"].createElement("span", {
        className: "less-label show-less-more",
        onClick: function onClick() {
          return _this2.setState({
            showLessFlag: true
          });
        }
      }, " ", lessText));
    }
  }]);
}(_react["default"].Component);
ReactReadLessMore.defaultProps = {
  clsName: "",
  moreText: "Show More",
  lessText: "Show Less",
  displayType: "",
  displayKey: "label",
  dataSeparator: ",",
  displayCount: 4,
  data: [],
  dataItemClass: "",
  autoClose: false,
  deleteIcon: "delete-icon"
};
ReactReadLessMore.propTypes = {
  clsName: _propTypes["default"].string,
  moreText: _propTypes["default"].string,
  lessText: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  displayType: _propTypes["default"].string,
  displayKey: _propTypes["default"].string,
  dataSeparator: _propTypes["default"].string,
  displayCount: _propTypes["default"].number,
  data: _propTypes["default"].array,
  dataItemClass: _propTypes["default"].string,
  deleteChip: _propTypes["default"].func,
  autoClose: _propTypes["default"].bool,
  deleteIcon: _propTypes["default"].string
};
var _default = exports["default"] = ReactReadLessMore;
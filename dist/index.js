'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./styles.css');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactReadLessMore = function (_React$Component) {
    _inherits(ReactReadLessMore, _React$Component);

    function ReactReadLessMore(props) {
        _classCallCheck(this, ReactReadLessMore);

        var _this = _possibleConstructorReturn(this, (ReactReadLessMore.__proto__ || Object.getPrototypeOf(ReactReadLessMore)).call(this, props));

        _this.state = {
            showLessFlag: true
        };
        return _this;
    }

    _createClass(ReactReadLessMore, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var showLessFlag = this.state.showLessFlag;
            var _props = this.props,
                clsName = _props.clsName,
                moreText = _props.moreText,
                lessText = _props.lessText,
                _onClick = _props.onClick,
                displayType = _props.displayType,
                displayKey = _props.displayKey,
                dataSeparator = _props.dataSeparator,
                displayCount = _props.displayCount,
                children = _props.children,
                data = _props.data,
                dataItemClass = _props.dataItemClass,
                deleteChip = _props.deleteChip;

            return _react2.default.createElement(
                'div',
                { className: clsName ? 'react-read-less-more' : 'react-read-less-more ' + clsName },
                children && children.map(function (element, index) {
                    if (index < displayCount) {
                        return element;
                    } else if (!showLessFlag) {
                        return element;
                    }
                }),
                data && data.map(function (element, index) {
                    if (index < displayCount) {
                        return [_react2.default.createElement(
                            'span',
                            { className: displayType === "CHIP" ? 'chip ' + (dataItemClass || '') : "data-item", key: Math.random(), onClick: function onClick() {
                                    return _onClick(element);
                                } },
                            element[displayKey] || element,
                            ' ',
                            deleteChip && _react2.default.createElement(
                                'span',
                                { className: 'delete-icon', onClick: function onClick() {
                                        deleteChip(element);
                                    } },
                                '\u2715'
                            )
                        ), _react2.default.createElement(
                            'span',
                            { key: Math.random() },
                            dataSeparator
                        )];
                    } else if (!showLessFlag) {
                        var _React$createElement;

                        return [_react2.default.createElement(
                            'span',
                            (_React$createElement = { key: Math.random(), className: displayType === "CHIP" ? 'chip ' + (dataItemClass || '') : "data-item" }, _defineProperty(_React$createElement, 'key', index), _defineProperty(_React$createElement, 'onClick', function onClick() {
                                return _onClick(element);
                            }), _React$createElement),
                            element[displayKey] || element,
                            ' ',
                            deleteChip && _react2.default.createElement(
                                'span',
                                { className: 'delete-icon', onClick: function onClick() {
                                        deleteChip(element);
                                    } },
                                '\u2715'
                            )
                        ), _react2.default.createElement(
                            'span',
                            { key: Math.random() },
                            dataSeparator
                        )];
                    }
                }),
                showLessFlag ? _react2.default.createElement(
                    'span',
                    { className: 'more-label show-less-more', onClick: function onClick() {
                            return _this2.setState({ showLessFlag: false });
                        } },
                    moreText
                ) : _react2.default.createElement(
                    'span',
                    { className: 'less-label show-less-more', onClick: function onClick() {
                            return _this2.setState({ showLessFlag: true });
                        } },
                    ' ',
                    lessText
                )
            );
        }
    }]);

    return ReactReadLessMore;
}(_react2.default.Component);

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
    autoClose: false
};

ReactReadLessMore.propTypes = {
    clsName: _propTypes2.default.string,
    moreText: _propTypes2.default.string,
    lessText: _propTypes2.default.string,
    onClick: _propTypes2.default.func,
    displayType: _propTypes2.default.string,
    displayKey: _propTypes2.default.string,
    dataSeparator: _propTypes2.default.string,
    displayCount: _propTypes2.default.number,
    children: children,
    data: _propTypes2.default.array,
    dataItemClass: _propTypes2.default.string,
    deleteChip: _propTypes2.default.func,
    autoClose: _propTypes2.default.bool

};
exports.default = ReactReadLessMore;
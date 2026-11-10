import React from "react";
import "./styles.css";
import PropTypes from "prop-types";

const itemLabel = (element, displayKey) =>
  element !== null && typeof element === "object"
    ? element[displayKey]
    : element;

class ReactReadLessMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLessFlag: true,
    };
  }

  renderDataItem(element, index) {
    const {
      onClick,
      displayType,
      displayKey,
      dataSeparator,
      dataItemClass,
      deleteChip,
      deleteIcon,
    } = this.props;
    const label = itemLabel(element, displayKey);
    return (
      <React.Fragment key={`${index}-${label}`}>
        <span
          className={
            displayType === "CHIP"
              ? `rlm-chip ${dataItemClass || ""}`
              : "data-item"
          }
          onClick={() => onClick && onClick(element)}
          title={label}
        >
          {label}{" "}
          {deleteChip && (
            <span
              className={deleteIcon}
              onClick={(e) => {
                e.stopPropagation();
                deleteChip(element);
              }}
            >
              &#10005;
            </span>
          )}
        </span>
        <span>{dataSeparator}</span>
      </React.Fragment>
    );
  }

  render() {
    const { showLessFlag } = this.state;
    const {
      clsName,
      moreText,
      lessText,
      displayCount,
      children,
      data,
    } = this.props;
    const childItems = React.Children.toArray(children);
    const visible = (items) =>
      showLessFlag ? items.slice(0, displayCount) : items;
    return (
      <div
        className={
          clsName ? `react-read-less-more ${clsName}` : "react-read-less-more"
        }
      >
        {visible(childItems)}
        {visible(data || []).map((element, index) =>
          this.renderDataItem(element, index)
        )}
        {showLessFlag ? (
          <span
            className="more-label show-less-more"
            onClick={() => this.setState({ showLessFlag: false })}
          >
            {moreText}
          </span>
        ) : (
          <span
            className="less-label show-less-more"
            onClick={() => this.setState({ showLessFlag: true })}
          >
            {" "}
            {lessText}
          </span>
        )}
      </div>
    );
  }
}
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
  deleteIcon: "delete-icon",
};

ReactReadLessMore.propTypes = {
  clsName: PropTypes.string,
  moreText: PropTypes.string,
  lessText: PropTypes.string,
  onClick: PropTypes.func,
  displayType: PropTypes.string,
  displayKey: PropTypes.string,
  dataSeparator: PropTypes.string,
  displayCount: PropTypes.number,
  data: PropTypes.array,
  dataItemClass: PropTypes.string,
  deleteChip: PropTypes.func,
  autoClose: PropTypes.bool,
  deleteIcon: PropTypes.string,
};
export default ReactReadLessMore;

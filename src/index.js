import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

class ReactReadLessMore extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showLessFlag: true
        }
    }
    render() {
        const {
            showLessFlag
        } = this.state
        const {
            clsName,
            moreText,
            lessText,
            onClick,
            displayType,
            displayKey,
            dataSeparator,
            displayCount,
            children,
            data,
            dataItemClass,
            deleteChip,
            deleteIcon
        } = this.props
        return <div className={clsName ? 'react-read-less-more' : `react-read-less-more ${clsName}`}>
            {children && children.map((element, index) => {
                if (index < displayCount) {
                    return element;
                } else if (!showLessFlag) {
                    return element;
                }
            })}
            {data && data.map((element, index) => {
                if (index < displayCount) {
                    return [<span className={displayType === "CHIP" ? `chip ${dataItemClass || ''}` : "data-item"} key={Math.random()} onClick={() => onClick(element)}>
                        {element[displayKey] || element} {deleteChip && <span className="delete-icon" onClick={() => { deleteChip(element) }}>&#10005;</span>}
                    </span>,
                    <span key={Math.random()}>{dataSeparator}</span>]
                } else if (!showLessFlag) {
                    return [<span key={Math.random()} className={displayType === "CHIP" ? `chip ${dataItemClass || ''}` : "data-item"} key={index}
                        onClick={() => onClick(element)}>{element[displayKey] || element} {deleteChip && <span className={deleteIcon} onClick={() => { deleteChip(element) }}>&#10005;</span>}
                    </span>, <span key={Math.random()}>{dataSeparator}</span>]
                }
            })}
            {showLessFlag ? <span className="more-label show-less-more" onClick={() => this.setState({ showLessFlag: false })}>{moreText}</span> :
                <span className="less-label show-less-more" onClick={() => this.setState({ showLessFlag: true })}> {lessText}</span>}
        </div>
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
    deleteIcon: 'delete-icon'
}

ReactReadLessMore.propTypes = {
    clsName: PropTypes.string,
    moreText: PropTypes.string,
    lessText: PropTypes.string,
    onClick: PropTypes.func,
    displayType: PropTypes.string,
    displayKey: PropTypes.string,
    dataSeparator: PropTypes.string,
    displayCount: PropTypes.number,
    children,
    data: PropTypes.array,
    dataItemClass: PropTypes.string,
    deleteChip: PropTypes.func,
    autoClose: PropTypes.bool,
    deleteIcon: PropTypes.string,

}
export default ReactReadLessMore;
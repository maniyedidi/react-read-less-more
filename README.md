# React Read More Less

[![NPM](https://nodei.co/npm/react-read-more-less.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-read-more-less/)
[![npm version](https://badge.fury.io/js/react-read-more-less.svg)](https://badge.fury.io/js/react-read-more-less)
![license-isc](https://img.shields.io/github/license/Thamodaran/react-read-more-less.svg)

## Install
```
npm install react-read-less-more --save

```
## Usage
```js
import ReactReadLessMore from 'react-read-less-more';

class ReadMoreAndLessText extends Component {
    render() {
        return (
            <ReactReadLessMore lessText="Show Less" moreText="Show More" displayCount={2} >
            <span>Java ,</span>
            <span>SQL </span>
            <span>HTML</span>
            <span>JavaScript</span>
        </ReactReadLessMore>
        );
    }
}
```
## Usage
```js
import ReactReadLessMore from 'react-read-less-more';
const data1 = [{label:"C"},{label:"Java"},{label:"Go"},{label:"Javascript"},{label:"HTML"},{label:"CSS"},{label:"REACT"},{label:"JQUERY"}];

const data2 = ["C","Java","Go"];

class ReadMoreAndLessText extends Component {
    render() {
        return (
            <ReactReadLessMore lessText="less" moreText="more"  displayType="CHIP"  deleteChip={(data)=>{}}
            onClick={(data)=>{}}
        dataSeparator="" displayCount={2} displayKey="label" data={data}>
        </ReactReadLessMore>
        );
    }
}
```

## PROPTYPES
| Prop | Type | Default |
| ---- | ---- | ------- |
| clsName | String |  |
| charLimit | integer | 30 |
| moreText | String | Read more |
| lessText | String | Read less |
| displayType | String | for display as chip displayType = "CHIP" |
| dataSeparator | String | to separate each data item like ',' or ';' |
| data | Array | input data array to display array of objects or Array of string  |
|displayKey| String | key in the data array to be displayed |
| dataItemClass | String | to customize data item pass the dataItemClass |
| onClick | String | on click event on element ,to enable add method onClick |
| deleteChip | String | event will be added to cross icon,to enable add event on element  |
| deleteIcon | String | class name for delete icon  |
| autoClose | String | Read less |



# react-read-less-more
import React from 'react';
import { render } from 'react-dom';
import ReactReadLessMore from '../../src';
const data = [{label:"C"},{label:"Java"},{label:"Go"},{label:"Javascript"},{label:"HTML"},{label:"CSS"},{label:"REACT"},{label:"JQUERY"},"Hello"]
const App = () => (
    <React.Fragment>
        <ReactReadLessMore lessText="less" moreText="more" displayCount={2} >
            <span>a,</span>
            <span>a,</span>
            <span>a,</span>
            <span>a,</span>
            <span>a</span>
            <span>a</span>
        </ReactReadLessMore>
        <ReactReadLessMore lessText="less" moreText="more"  displayType="CHIP"  deleteChip={()=>{}}
        dataSeparator="" displayCount={2} displayKey="label" data={data}>
        </ReactReadLessMore>
    </React.Fragment>

);
render(<App />, document.getElementById("root"));
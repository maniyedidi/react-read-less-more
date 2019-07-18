import React from 'react';
import { render } from 'react-dom';
import ReactReadLessMore from '../../src';
const data = [{label:"C"},{label:"Java"},{label:"Go"},{label:"Javascript"},{label:"HTML"},{label:"CSS"},{label:"REACT"},{label:"JQUERY"},"Hello"]
const App = () => (
    <React.Fragment>
        <ReactReadLessMore lessText="Show Less" moreText="Show More"displayCount={2} >
            <span>a,</span>
            <span>a,</span>
            <span>a,</span>
            <span>a,</span>
            <span>a</span>
            <span>a</span>
        </ReactReadLessMore>


        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <ReactReadLessMore lessText="Show Less" moreText="Show More"  displayType="CHIP"  deleteChip={()=>{}}
        dataSeparator="" displayCount={2} displayKey="label" data={data}>
        </ReactReadLessMore>
    </React.Fragment>

);
render(<App />, document.getElementById("root"));
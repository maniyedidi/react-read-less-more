import React from 'react';
import { render } from 'react-dom';
import ReactReadLessMore from '../../src';
const data = [{label:"Java"},{label:"Go"},{label:"Javascript"},{label:"HTML"},{label:"CSS"},{label:"REACT"},{label:"JQUERY"},"Hello"]
const App = () => (
    <React.Fragment>
        <ReactReadLessMore lessText="Show Less" moreText="Show More"displayCount={2} >
            <span>Java ,</span>
            <span>CSS,</span>
            <span>HTML</span>
            <span>SCSS</span>
            <span>LESS</span>
        </ReactReadLessMore>
            <br/>
        <ReactReadLessMore lessText="Show Less" moreText="Show More"  displayType="CHIP" 
        dataSeparator="" displayCount={2} displayKey="label" data={data}>
        </ReactReadLessMore>
    </React.Fragment>

);
render(<App />, document.getElementById("root"));
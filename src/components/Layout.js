import React from "react";
import Header from "./header";
import * as d3 from "d3";
import ScatterPlot from "./scatter";

import LineChart from "./lineChart";

const styles = {
    width: 900,
    height:600,
    paddingLeft:0,
    paddingRight:450,
    paddingHeight: 30
};

const numDataPoints = 1;

const randomValue = () => Math.floor(Math.random() *1000);

const randomDataSet = () => {
  return Array.apply(null, {length: numDataPoints}).map((val, index) => [index, randomValue()]);
}

export default class Layout extends React.Component {
    constructor(props){
        super(props);

        this.state = { 
            data: randomDataSet(),
            index: numDataPoints 
        };

        const that = this;

        setInterval(function(that){
            let newData = that.state.data;
            let indexTemp = that.state.index + 1;
            
            newData.push([indexTemp, randomValue()]);

            that.setState({ data: newData, index:indexTemp });
        },200, that);
    }

    render(){
        return (
            <div>
                <LineChart data={this.state.data} {...styles} />
            </div>
        );
    }
}

import React from 'react';
import * as d3 from "d3";

export default (props) => {
    const numOfPoints = 70;

    let maxPoint = d3.max(props.data, (d) => d[0]);

    const x = d3.scaleLinear()
        .domain([maxPoint >= numOfPoints ? maxPoint - numOfPoints : 0, maxPoint >= numOfPoints ? maxPoint: numOfPoints])
        .range([props.paddingLeft, props.width - props.paddingRight]);

    const y = d3.scaleLinear()
        .domain([-1000, 2000])
        .range([props.paddingHeight, props.height - props.paddingHeight]);


    const line = d3.line()
            .x((d) => x(d[0]))
            .y((d) => y(d[1]))
            .curve(d3.curveCatmullRom.alpha(0.1));

    const area = d3.area()
        .x((d) => x(d[0]))
        .y0(props.height)
        .y1((d) => y(d[1]))
        .curve(d3.curveCatmullRom.alpha(0.1));

    const circleProps = {
        cx: x(props.data[props.data.length-1][0]),
        cy: y(props.data[props.data.length-1][1]),
        r: 3
    };

    return (<div>
                <svg width={props.width} height={props.height}>

                    <g>
                        <path className="line shadow" d={line(props.data)} />   
                        <path className="area shadow" d={area(props.data)}  />   
                        <circle {...circleProps} /> 
                    </g>
                </svg>
    </div>)

}

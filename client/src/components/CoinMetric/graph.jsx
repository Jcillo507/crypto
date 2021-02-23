import React, { Component } from "react";
import * as d3 from "d3";

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:props
    };
  }
  componentDidMount() {
    const data = [2, 4, 2, 6, 8];
    this.drawBarChart(data);
  }
  drawBarChart(data) {}
  render() {
    console.log(this.state.data)
    return <div ref="canvas"></div>;
  }
}
export default BarChart;

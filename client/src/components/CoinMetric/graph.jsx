import React, { useEffect } from "react";
import * as d3 from "d3";

const BarChart = (props) => {
  console.log(props)
  const drawChart = () => {
    const data = props.data;
    const svg = d3.select("#coin-graph").append("svg").attr("width", 9000).attr("height", 600);
    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 1.1)
      .attr("y", 0)
      .attr("width", 1.2)
      .attr("height", (d, i) => d)
      .attr("fill", "green");
  }
  useEffect(() => {
    drawChart();

  }, [props.data])
  return (
    <>
      {/* <div className='graph' id="coin-graph" style={{ margin: "100px" }}></div> */}
    </>
  )
}
export default BarChart;

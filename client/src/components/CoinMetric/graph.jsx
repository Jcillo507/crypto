import React, { useEffect} from "react";
import * as d3 from "d3";

const BarChart = (props)=>{
const drawChart = ()=>{
  const data = [16, 5, 6, 6, 9, 10];
  const svg = d3.select("#coin-graph").append("svg").attr("width", 700).attr("height", 300);
  svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * 70)
    .attr("y", 0)
    .attr("width", 25)
    .attr("height", (d, i) => d)
    .attr("fill", "green");}
  useEffect(() => {
    drawChart();
    
  }, [])
  return(
    <>
    <div className='graph' id="coin-graph" style={{margin:"100px"}}></div>
    </>
  )
}
export default BarChart;

import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Candlestick extends Component {
  constructor(props) {
    super(props)

  }
  render() {

    console.log(document.title)
    const graphDataPoints = this.props.data.slice(-90)
    const options = {
      theme: "light1",
      animationEnabled: true,
      exportEnabled: true,
      width:800,
      height:600,
      exportEnabled:false,
      title: {
        text: "Last 90 Days"
      },
      axisX: {
        valueFormatString: "MMM"
      },
      axisY: {
        includeZero: false,
        prefix: "$",
        title: "Price (in USD)"
      },
      data: [{
        type: "candlestick",
        yValueFormatString: "$###0.00",
        xValueFormatString: "DD MMM YY",
        dataPoints: graphDataPoints
      }
      ]
    }
    console.log(this.chart)
    return (
      <div style={{width:'600px'}}>
        <CanvasJSChart options={options}
          onRef={ref => this.chart = ref}
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default Candlestick;

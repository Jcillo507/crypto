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
      theme: "light2", // "light1", "light2", "dark1", "dark2"
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: document.title
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
        showInLegend: true,
        name: "Intel Corporation",
        yValueFormatString: "$###0.00",
        xValueFormatString: "DD MMM YY",
        dataPoints: graphDataPoints
      }
      ]
    }
    return (
      <div>
        <CanvasJSChart options={options}
          onRef={ref => this.chart = ref}
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default Candlestick;

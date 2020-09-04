import React from "react";
import { Doughnut } from "react-chartjs-2";

const Graph = (props) => {
  console.log(props);
  const data = {
    labels: ["Wrong", "Right"],
    datasets: [
      {
        data: [props.wrong, props.right],
        backgroundColor: ["#c90c0c", "#4ffc4c"],
        hoverBackgroundColor: ["#e05e5e", "#bbffba"],
      },
    ],
  };

  return (
    <div>
      <h1>Results</h1>
      <Doughnut data={data} />
    </div>
  );
};

export default Graph;

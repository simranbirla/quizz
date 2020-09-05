import React from "react";
import { Doughnut } from "react-chartjs-2";

const Graph = (props) => {
  console.log(props);
  const data = {
    labels: ["Wrong", "Right", "Unattempted"],
    datasets: [
      {
        data: [
          props.wrong,
          props.right,
          props.total - props.wrong - props.right,
        ],
        backgroundColor: ["#c90c0c", "#4ffc4c", "#e2e2e2"],
        hoverBackgroundColor: ["#e05e5e", "#bbffba", "#f3f3f3"],
      },
    ],
  };

  return (
    <div className="graph">
      <h2>Results</h2>
      <Doughnut data={data} />
    </div>
  );
};

export default Graph;

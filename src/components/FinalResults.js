import React from "react";
import Graph from "./Graph";

const FinalResults = (props) => {
  return (
    <div>
      You scored
      <h1>
        {props.ans}/{props.total}
      </h1>
      <div>
        <Graph wrong={props.wrong} right={props.ans} total={props.total} />
      </div>
    </div>
  );
};

export default FinalResults;

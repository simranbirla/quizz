import React, { useEffect } from "react";
import Graph from "./Graph";

const FinalResults = (props) => {
  useEffect(() => {
    localStorage.setItem(props.user, props.ans);
    return;
  }, []);
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

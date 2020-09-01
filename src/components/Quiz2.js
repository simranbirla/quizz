import React, { useState, useEffect } from "react";
import questions from "./sampleQues";
const Quiz2 = () => {
  const [num, setNum] = useState(0);

  const renderQues = (num) => {
    return (
      <div>
        {questions[num].ques}
        {questions[num].options.map((opt) => {
          return <p onClick={(e) => check(e)}>{opt}</p>;
        })}
      </div>
    );
  };

  const check = (e) => {
    console.log(e.target.innerText);
    if (e.target.innerText === questions[num].answer) {
      console.log("right");
      setNum(num + 1);
    } else {
      console.log("wrong");
    }
  };

  return <div>THIS IS 2ND QUIZ{renderQues(num)}</div>;
};

export default Quiz2;

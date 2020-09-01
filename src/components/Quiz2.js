import React, { useState, useEffect } from "react";
import questions from "./sampleQues";
const Quiz2 = () => {
  const [num, setNum] = useState(0);
  const [ans, setAns] = useState("");
  const renderQues = (num) => {
    return (
      <div>
        {questions[num].ques}
        {questions[num].options.map((opt) => {
          return (
            <p
              onClick={() => check(opt)}
              style={{
                color: `${
                  ans !== opt
                    ? "black"
                    : ans === questions[num].answer
                    ? "green"
                    : "red"
                }`,
              }}
            >
              {opt}
            </p>
          );
        })}
      </div>
    );
  };

  const check = (opt) => {
    setAns(opt);
    /* if (opt === questions[num].answer) {
      console.log("right");
      setAns(true);
      setTimeout(() => {
        setAns(false);
        setNum(num + 1);
      }, 1000);
    } else {
      console.log("wrong");
    }*/
    setTimeout(() => {
      setAns("");
      setNum(num + 1);
    }, 1000);
  };

  return <div>THIS IS 2ND QUIZ{renderQues(num)}</div>;
};

export default Quiz2;

import React from "react";
import questions from "./sampleQues";

const renderQues = () => {
  return questions.map((ques, index) => {
    return (
      <div key={ques.id}>
        <p>
          <span>{ques.id}. </span>
          {ques.ques}
        </p>
        <ul>
          {ques.options.map((opt) => {
            return (
              <li
                key={opt}
                onClick={(e) => {
                  if (e.target.innerText === ques.answer) {
                    console.log("right");
                  } else {
                    console.log("wrong");
                  }
                }}
              >
                {opt}
              </li>
            );
          })}
        </ul>
      </div>
    );
  });
};

//const check = (e) => {
//console.log(e.target.innerText);
//};

const Quiz1 = () => {
  return <div>{renderQues()}</div>;
};

export default Quiz1;

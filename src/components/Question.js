import React, { useState } from "react";

const Question = (props) => {
  const [num, setNum] = useState(0);
  const [ans, setAns] = useState(0);
  const [wrong, setWrong] = useState(0);

  const check = (e, opt) => {
    if (props.questions[num].answer == opt) {
      setAns(ans + 1);
      console.log("RIGHT");
      e.target.setAttribute("style", "color: green;");
    } else {
      console.log("WRONG");
      e.target.setAttribute("style", "color: red;");
      setWrong(wrong + 1);
    }
    setTimeout(() => {
      setNum(num + 1);
    }, 500);
  };
  return (
    <div>
      {console.log(props.questions[num])}
      {props.questions[num] ? (
        <div>
          <p>
            Q{props.questions[num].id}.{props.questions[num].ques}
          </p>
          <ul>
            {props.questions[num].option.map((opt) => (
              <li key={opt} onClick={(e) => check(e, opt)}>
                {opt}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Question;

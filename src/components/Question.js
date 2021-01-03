import React from "react";
import "../Style/Questions.css";

const Question = ({ num, setNum, wrong, setWrong, ans, setAns, questions }) => {
  const check = (e, opt) => {
    if (questions[num].answer === opt) {
      setAns(ans + 1);
      e.target.setAttribute("style", "background: green;");
    } else {
      e.target.setAttribute("style", "background: red;");
      setWrong(wrong + 1);
    }
    setTimeout(() => {
      setNum(num + 1);
    }, 500);
  };
  return (
    <div className="question">
      {questions[num] ? (
        <div className="question-inside">
          <p>
            Q{questions[num].id}.{questions[num].ques}
          </p>
          <ul className="option">
            {questions[num].option.map((opt) => (
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

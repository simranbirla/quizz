import React from "react";

const Question = ({ num, setNum, wrong, setWrong, ans, setAns, questions }) => {
  const check = (e, opt) => {
    if (questions[num].answer === opt) {
      setAns(ans + 1);
      e.target.setAttribute("style", "color: green;");
    } else {
      e.target.setAttribute("style", "color: red;");
      setWrong(wrong + 1);
    }
    setTimeout(() => {
      setNum(num + 1);
    }, 500);
  };
  return (
    <div>
      {console.log(questions[num])}
      {questions[num] ? (
        <div>
          <p>
            Q{questions[num].id}.{questions[num].ques}
          </p>
          <ul>
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

import React from "react";
import "../Style/Questions.css";

const renderQuestions = (
  questions,
  num,
  time,
  score,
  setScore,
  setAns,
  setNum,
  ans,
  setWrong,
  wrong
) => {
  return questions[num] ? (
    <div className="question-container">
      <div className="score">
        <h2>{time}</h2>
        <h2>{score}</h2>
      </div>
      <div className="ques">
        <p>
          <span>Q{num}. </span>
          {questions[num].ques}
        </p>
      </div>
      <div className="options">
        {questions[num].option.map((opt, index) => {
          return (
            <p
              key={index}
              onClick={() =>
                check(
                  opt,
                  questions[num].answer,
                  setAns,
                  setNum,
                  num,
                  setScore,
                  score,
                  setWrong,
                  wrong
                )
              }
              style={{
                backgroundColor: `${
                  ans !== opt
                    ? "transparent"
                    : ans === questions[num].answer
                    ? "yellowgreen"
                    : "darkred"
                }`,
              }}
              className="option"
            >
              {index + 1}. {opt}
            </p>
          );
        })}
      </div>
    </div>
  ) : (
    false
  );
};

const check = (
  opt,
  answer,
  setAns,
  setNum,
  num,
  setScore,
  score,
  setWrong,
  wrong
) => {
  setAns(opt);
  if (opt === answer) {
    //console.log("right");
    setScore(score + 1);
  } else {
    setWrong(wrong + 1);
  }
  setTimeout(() => {
    setAns("");
    setNum(num + 1);
  }, 1000);
};

export default renderQuestions;

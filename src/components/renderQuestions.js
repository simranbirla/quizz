import React from "react";

const renderQuestions = (
  questions,
  num,
  time,
  score,
  setScore,
  setAns,
  setNum,
  ans
) => {
  return questions[num] ? (
    <div>
      <h2>{time}</h2>
      <h2>{score}</h2>
      <p>{questions[num].ques}</p>
      <div>
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
                  score
                )
              }
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
    </div>
  ) : (
    false
  );
};

const check = (opt, answer, setAns, setNum, num, setScore, score) => {
  setAns(opt);
  if (opt === answer) {
    //console.log("right");
    setScore(score + 1);
  }
  setTimeout(() => {
    setAns("");
    setNum(num + 1);
  }, 1000);
};

export default renderQuestions;

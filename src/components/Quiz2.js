import React, { useState, useEffect } from "react";
import questions from "./sampleQues";
import { connect } from "react-redux";
import { fetchQues } from "../actions";

const Quiz2 = (props) => {
  const [num, setNum] = useState(0);
  const [ans, setAns] = useState("");
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(59);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    props.fetchQues();
    return () => {
      clearInterval(interval);
    };
  }, []);

  const renderQues = (num) => {
    return (
      <div>
        {num === questions.length ? (
          <h1>{score}</h1>
        ) : (
          <div>
            <p>{score}</p>
            <p>{time}</p>
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
        )}
      </div>
    );
  };

  const check = (opt) => {
    setAns(opt);
    if (opt === questions[num].answer) {
      //console.log("right");
      setScore(score + 1);
    }
    setTimeout(() => {
      setAns("");
      setNum(num + 1);
    }, 1000);
  };

  const renderScreen = () => {
    return (
      <div>
        <h1>Time's UP</h1>
        <h2>{score}</h2>
      </div>
    );
  };

  const renderQ = () => {
    return props.questions[num] ? (
      <div>{props.questions[num].ques}</div>
    ) : (
      console.log(false)
    );
  };

  return (
    <div>
      THIS IS 2ND QUIZ
      <div>{renderQ()}</div>
      {time > 0 ? renderQues(num) : renderScreen()}
    </div>
  );
};

const mapStateToProps = (state) => {
  //console.log(state);
  return { questions: state };
};

export default connect(mapStateToProps, { fetchQues })(Quiz2);

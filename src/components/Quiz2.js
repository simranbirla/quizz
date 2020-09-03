import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchQues } from "../actions";
import useTime from "./useTime";

const Quiz2 = (props) => {
  const [num, setNum] = useState(1);
  const [ans, setAns] = useState("");
  const [score, setScore] = useState(0);
  console.log(props);
  const time = useTime();
  useEffect(() => {
    props.fetchQues("questions");
    return;
  }, []);

  const renderScreen = () => {
    return (
      <div>
        <h1>Time's UP</h1>
        <h2>{score}</h2>
      </div>
    );
  };

  const renderQ = (num) => {
    return props.questions[num] ? (
      <div>
        <h2>{time}</h2>
        <h2>{score}</h2>
        <p>{props.questions[num].ques}</p>
        <div>
          {props.questions[num].option.map((opt) => {
            return (
              <p
                onClick={() => check(opt, props.questions[num].answer)}
                style={{
                  color: `${
                    ans !== opt
                      ? "black"
                      : ans === props.questions[num].answer
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
      console.log(false)
    );
  };

  const check = (opt, answer) => {
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

  const answered = (num) => {
    return num > 3 ? (
      <div>
        <h1>{score}</h1>
      </div>
    ) : (
      renderQ(num)
    );
  };

  return (
    <div>
      <h1>THIS IS 2ND QUIZ</h1>
      {time > 0 ? answered(num) : renderScreen()}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { questions: state };
};

export default connect(mapStateToProps, { fetchQues })(Quiz2);

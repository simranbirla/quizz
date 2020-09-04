import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchQues, clear } from "../actions";
import useTime from "./useTime";
import renderQ from "./renderQuestions";

const renderScreen = (score) => {
  return (
    <div>
      <h1>Total Score</h1>
      <h2>{score}</h2>
    </div>
  );
};

const Quiz = (props) => {
  const [num, setNum] = useState(1);
  const [ans, setAns] = useState("");
  const [score, setScore] = useState(0);
  //console.log(props);
  const time = useTime();
  useEffect(() => {
    props.fetchQues(props.match.params.sub);
    return () => {
      props.clear();
    };
  }, []);

  const answered = (
    num,
    length,
    score,
    questions,
    time,
    setScore,
    setAns,
    setNum,
    ans
  ) => {
    return num > length
      ? renderScreen(score)
      : renderQ(questions, num, time, score, setScore, setAns, setNum, ans);
  };

  return (
    <div>
      {
        //console.log(Object.values(props.questions).length)
      }
      <h1>IT BEGINS</h1>
      {time > 0
        ? answered(
            num,
            Object.values(props.questions).length,
            score,
            props.questions,
            time,
            setScore,
            setAns,
            setNum,
            ans
          )
        : renderScreen(score)}
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return { questions: state };
};

export default connect(mapStateToProps, { fetchQues, clear })(Quiz);

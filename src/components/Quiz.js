import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchQues, clear } from "../actions";
import Graph from "./Graph";
import useTime from "./useTime";
import renderQ from "./renderQuestions";

const Quiz = (props) => {
  const [num, setNum] = useState(1);
  const [ans, setAns] = useState("");
  const [score, setScore] = useState(0);
  const [wrong, setWrong] = useState(0);
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
    ans,
    setWrong,
    wrong
  ) => {
    return num > length
      ? renderScreen(score, wrong)
      : renderQ(
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
        );
  };

  return (
    <div>
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
            ans,
            setWrong,
            wrong
          )
        : renderScreen(score, wrong)}
    </div>
  );
};

const renderScreen = (score, length) => {
  return (
    <div>
      <h1>Total Score</h1>
      <h2>{score}</h2>
      <Graph wrong={length} right={score} />
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return { questions: state };
};

export default connect(mapStateToProps, { fetchQues, clear })(Quiz);

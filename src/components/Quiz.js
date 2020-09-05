import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchQues, clear } from "../actions";
import Graph from "./Graph";
import useTime from "./useTime";
import renderQ from "./renderQuestions";
import "../Style/Questions.css";

const Quiz = (props) => {
  const [num, setNum] = useState(1);
  const [ans, setAns] = useState("");
  const [score, setScore] = useState(0);
  const [wrong, setWrong] = useState(0);
  //console.log(props);
  console.log(wrong);
  const time = useTime();
  useEffect(() => {
    props.fetchQues(props.match.params.sub);
    setWrong(Object.values(props.questions).length);
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
      ? renderScreen(score, wrong, length)
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
        : renderScreen(score, wrong, Object.values(props.questions).length)}
    </div>
  );
};

const renderScreen = (score, length, total) => {
  return (
    <div className="results">
      <h2>Total Score</h2>
      <h2>
        {score}/{total}
      </h2>
      <Graph wrong={length} right={score} total={total} />
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return { questions: state };
};

export default connect(mapStateToProps, { fetchQues, clear })(Quiz);

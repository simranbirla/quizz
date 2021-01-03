import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchQues, clear } from "../actions";
import useTime from "./useTime";
import Question from "./Question";
import Results from "./FinalResults";
import "../Style/Questions.css";

const QuizPage = (props) => {
  const [ans, setAns] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [num, setNum] = useState(0);
  const time = useTime(160);

  useEffect(() => {
    props.fetchQues(props.match.params.sub);
    return () => {
      props.clear();
    };
  }, []);

  return (
    <div className="quizPage">
      {props.loading ? (
        <div> LOADING </div>
      ) : (
        <>
          {props.questions && time >= 0 && num !== props.total ? (
            <>
              <h3 className="time">{time}</h3>
              <div className="complete">
                <div
                  className="complete-inside"
                  style={{ width: `${(num * 100) / props.total}%` }}
                ></div>
              </div>
              <Question
                questions={props.questions}
                ans={ans}
                setAns={setAns}
                wrong={wrong}
                setWrong={setWrong}
                num={num}
                setNum={setNum}
              />
            </>
          ) : (
            <>
              {props.questions ? (
                <Results
                  total={props.questions.length}
                  ans={ans}
                  user={props.user}
                  wrong={wrong}
                />
              ) : null}
            </>
          )}
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { fetchQues, clear })(QuizPage);

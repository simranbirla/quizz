import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchQues, clear } from "../actions";
import useTime from "./useTime";
import Question from "./Question";

const QuizPage = (props) => {
  const [ans, setAns] = useState("");
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const time = useTime(60);

  useEffect(() => {
    props.fetchQues(props.match.params.sub);
    return () => {
      props.clear();
    };
  }, []);

  return (
    <div>
      {props.loading ? (
        <div> LOADING </div>
      ) : (
        <>
          {time >= 0 ? (
            <>
              <h3>{time}</h3>
              <h4>{props.total}</h4>
              <Question questions={props.questions} />
            </>
          ) : (
            <div>DONE</div>
          )}
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps, { fetchQues, clear })(QuizPage);

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createQues } from "../actions/index";
const CreateQues = (props) => {
  const [question, setQuestion] = useState({});
  const [option, setOptions] = useState({});

  const onInput = (e, type) => {
    if (type.includes("option")) {
      setOptions({ ...option, [type]: e.target.value });
    } else {
      setQuestion({ ...question, [type]: e.target.value });
    }
  };

  const formSubmit = (e, value, opt) => {
    e.preventDefault();
    props.createQues(value, opt);
  };

  useEffect(() => {
    console.log(question);
    return;
  }, [question]);

  return (
    <div>
      <form onSubmit={(e) => formSubmit(e, question, Object.values(option))}>
        <input
          type="text"
          placeholder="question"
          onChange={(e) => onInput(e, "ques")}
        />
        <input
          type="text"
          placeholder="answer"
          onChange={(e) => onInput(e, "answer")}
        />
        <input
          type="text"
          placeholder="options"
          onChange={(e) => onInput(e, "option1")}
        />
        <input
          type="text"
          placeholder="options"
          onChange={(e) => onInput(e, "option2")}
        />
        <input
          type="text"
          placeholder="options"
          onChange={(e) => onInput(e, "option3")}
        />
        <input
          type="text"
          placeholder="options"
          onChange={(e) => onInput(e, "option4")}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps, { createQues })(CreateQues);

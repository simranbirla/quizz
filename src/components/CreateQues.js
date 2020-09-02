import React, { useState } from "react";
import { connect } from "react-redux";
import { createQues } from "../actions/index";
const CreateQues = (props) => {
  const [question, setQuestion] = useState({});
  const [option, setOptions] = useState({});
  const onInput = (e, type) => {
    //console.log(e.target.value);
    if (type.includes("option")) {
      setOptions({ ...option, [type]: e.target.value });
      setQuestion({ ...question, option: Object.values(option) });
    } else {
      setQuestion({ ...question, [type]: e.target.value });
    }
  };

  const formSubmit = (e, value) => {
    e.preventDefault();
    props.createQues(value);
  };

  return (
    <div>
      {console.log(question)}
      <form onSubmit={(e) => formSubmit(e, question)}>
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

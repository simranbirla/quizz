import React, { useState } from "react";
import { connect } from "react-redux";
import { createQues } from "../actions/index";
const CreateQues = (props) => {
  const [question, setQuestion] = useState({});
  const [option, setOptions] = useState({});
  const [sub, setSub] = useState("gk");

  const onInput = (e, type) => {
    if (type.includes("option")) {
      setOptions({ ...option, [type]: e.target.value });
    } else {
      setQuestion({ ...question, [type]: e.target.value });
    }
  };

  const formSubmit = (e, value, opt) => {
    e.preventDefault();
    props.createQues(sub, value, opt);
  };

  const dropChange = (e) => {
    setSub(e.target.value);
  };

  return (
    <div>
      <select onChange={dropChange}>
        <option value="gk">Genral Knowledge</option>
        <option value="cn">Computer Networks</option>
        <option value="os">Operating System</option>
        <option value="sql">SQL</option>
        <option value="js">Javascript</option>
      </select>
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

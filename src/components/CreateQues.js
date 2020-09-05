import React, { useState } from "react";
import { connect } from "react-redux";
import { createQues } from "../actions/index";
import "../Style/Create.css";

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
    <div className="create-container">
      <select onChange={dropChange}>
        <option value="gk">Genral Knowledge</option>
        <option value="cn">Computer Networks</option>
        <option value="os">Operating System</option>
        <option value="sql">SQL</option>
        <option value="js">Javascript</option>
      </select>
      <form onSubmit={(e) => formSubmit(e, question, Object.values(option))}>
        <p>Enter the Question:</p>
        <input
          type="text"
          placeholder="question"
          onChange={(e) => onInput(e, "ques")}
          className="input"
        />
        <p>Enter the Answer:</p>
        <input
          type="text"
          placeholder="answer"
          onChange={(e) => onInput(e, "answer")}
          className="input"
        />
        <p>Enter the options:</p>
        <input
          type="text"
          placeholder="options"
          onChange={(e) => onInput(e, "option1")}
          className="input"
        />
        <input
          type="text"
          placeholder="options"
          onChange={(e) => onInput(e, "option2")}
          className="input"
        />
        <input
          type="text"
          placeholder="options"
          onChange={(e) => onInput(e, "option3")}
          className="input"
        />
        <input
          type="text"
          placeholder="options"
          onChange={(e) => onInput(e, "option4")}
          className="input"
        />
        <button className="submit">Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps, { createQues })(CreateQues);

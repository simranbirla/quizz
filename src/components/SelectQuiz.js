import React from "react";
import { Link } from "react-router-dom";
import "../Style/SelectQuiz.css";

const SelectQuiz = () => {
  return (
    <div className="outer">
      <div className="add">
        <Link to="/quiz/create">Add a Question</Link>
      </div>
      <h1>Select the Subject</h1>
      <div className="sub-buttons">
        <Link to="/gk">
          <button className="subject">General Knowledge</button>
        </Link>
        <Link to="/cn">
          <button className="subject">Computer Networks</button>
        </Link>
        <Link to="/sql">
          <button className="subject">SQL</button>
        </Link>
        <Link to="/js">
          <button className="subject">Javascript</button>
        </Link>
        <Link to="/os">
          <button className="subject">Operating System</button>
        </Link>
      </div>
    </div>
  );
};

export default SelectQuiz;

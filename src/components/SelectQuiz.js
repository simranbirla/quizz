import React from "react";
import { Link } from "react-router-dom";
import "../Style/SelectQuiz.css";

const SelectQuiz = (props) => {
  return (
    <div className="outer">
      {props.user === "admin" ? (
        <div className="add">
          <Link to="/quiz/create">Add a Question</Link>
          <Link to="/quiz/score">See Score</Link>
        </div>
      ) : null}

      <h1>Select the Subject</h1>
      <div className="sub-buttons">
        <Link to="/gk">
          <div className="gk">
            <button className="subject">General Knowledge</button>
          </div>
        </Link>

        <Link to="/cn">
          <div className="cn">
            <button className="subject">Computer Networks</button>
          </div>
        </Link>

        <Link to="/sql">
          <div className="sql">
            <button className="subject">SQL</button>
          </div>
        </Link>

        <Link to="/js">
          <div className="js">
            <button className="subject">Javascript</button>
          </div>
        </Link>

        <Link to="/os">
          <div className="os">
            <button className="subject">Operating System</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SelectQuiz;

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

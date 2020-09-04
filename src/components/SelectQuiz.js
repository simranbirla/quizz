import React from "react";
import { Link } from "react-router-dom";
const SelectQuiz = () => {
  return (
    <div>
      <div>
        <Link to="/gk">
          <button>General Knowledge</button>
        </Link>
        <Link to="/cn">
          <button>Computer Networks</button>
        </Link>
        <Link to="/sql">
          <button>SQL</button>
        </Link>
        <Link to="/js">
          <button>Javascript</button>
        </Link>
        <Link to="/os">
          <button>Operating System</button>
        </Link>
      </div>
      <div>
        <Link to="/quiz/create">Add a Question</Link>
      </div>
    </div>
  );
};

export default SelectQuiz;

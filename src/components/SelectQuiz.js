import React from "react";
import { Link } from "react-router-dom";
const SelectQuiz = () => {
  return (
    <div>
      <Link to="/quiz1">
        <button>Quiz 1</button>
      </Link>
      <Link to="/quiz2">
        <button>Quiz 2</button>
      </Link>
    </div>
  );
};

export default SelectQuiz;

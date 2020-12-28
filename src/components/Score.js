import React, { useState, useEffect } from "react";

const Scores = () => {
  const [name, setName] = useState();
  const [score, setScore] = useState();
  const getScore = () => {
    setScore(localStorage.getItem(name));
  };
  return (
    <div>
      <label>
        Enter the Name:
        <input
          placeholder="Enter the name for scores"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button onClick={getScore}>Get score</button>
      <h2>{score}</h2>
    </div>
  );
};

export default Scores;

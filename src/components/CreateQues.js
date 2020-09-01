import React, { useState } from "react";

const CreateQues = () => {
  const [question, setQuestion] = useState({});
  const [option, setOptions] = useState([]);
  const onInput = (e, type) => {
    //console.log(e.target.value);
    if (type === "option") {
      setOptions([...option, e.target.value]);
    } else {
      setQuestion({ ...question, [type]: e.target.value });
    }
  };

  return (
    <div>
      {console.log(question)}
      <form>
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
          onChange={(e) => onInput(e, "option")}
        />
        <input
          type="text"
          placeholder="options"
          onChange={(e) => onInput(e, "option")}
        />
        <input
          type="text"
          placeholder="options"
          onChange={(e) => onInput(e, "option")}
        />
        <input
          type="text"
          placeholder="options"
          onChange={(e) => onInput(e, "option")}
        />
      </form>
    </div>
  );
};

export default CreateQues;

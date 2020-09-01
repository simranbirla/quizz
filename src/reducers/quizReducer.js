import React from "react";
import _ from "lodash";
const quizReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "CREATE":
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

export default quizReducer;

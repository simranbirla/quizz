import React from "react";

const quizReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH":
      return { ...state, [action.payload.id]: action.payload };
    case "CREATE":
      return { ...state, [action.payload.id]: action.payload };
  }
};

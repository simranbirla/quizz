import _ from "lodash";
const quizReducer = (state = { questions: [], loading: null }, action) => {
  switch (action.type) {
    case "FETCH":
      return {
        ...state,
        questions: [...action.payload],
        loading: false,
        total: [...action.payload].length,
      };
    case "CREATE":
      return { ...state, [action.payload.id]: action.payload, loading: false };
    case "CLEAR":
      return {
        ..._.omit(state, Object.keys(state)),
      };
    case "LOADING":
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default quizReducer;

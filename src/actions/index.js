import questions from "../apis/question";

export const fetchQues = () => {
  return async (dispatch) => {
    const response = await questions.get("/questions");
    console.log(response);
    dispatch({ type: "FETCH", payload: response.data });
  };
};

export const createQues = () => {
  return { type: "CREATE" };
};

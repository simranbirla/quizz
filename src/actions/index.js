import questions from "../apis/question";

export const fetchQues = () => {
  return async (dispatch) => {
    const response = await questions.get("/questions");
    // console.log(response);
    dispatch({ type: "FETCH", payload: response.data });
  };
};

export const fetchQue = () => {
  return async (dispatch) => {
    const response = await questions.get("/questions/1");
    console.log(response.data);
    dispatch({ type: "FETCH", payload: response.data });
  };
};

export const createQues = (value) => {
  return async (dispatch) => {
    const response = await questions.post("/questions", { ...value });
    console.log(response);
    dispatch({ type: "CREATE", payload: response.data });
  };
};

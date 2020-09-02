import questions from "../apis/question";
import history from "../history";
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

export const createQues = (ques, options) => {
  return async (dispatch) => {
    const response = await questions.post("/questions", { ...ques, options });
    dispatch({ type: "CREATE", payload: response.data });
    history.push("/");
  };
};

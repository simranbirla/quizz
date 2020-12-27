import questions from "../apis/question";
import history from "../history";
export const fetchQues = (sub) => {
  return async (dispatch) => {
    dispatch({ type: "LOADING" });
    const response = await questions.get(`/${sub}`);
    dispatch({ type: "FETCH", payload: response.data });
  };
};

export const clear = () => {
  return { type: "CLEAR" };
};

export const createQues = (sub, ques, option) => {
  return async (dispatch) => {
    const response = await questions.post(`/${sub}`, { ...ques, option });
    dispatch({ type: "CREATE", payload: response.data });
    history.push("/");
  };
};

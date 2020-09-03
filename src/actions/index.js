import questions from "../apis/question";
import history from "../history";
export const fetchQues = (sub) => {
  return async (dispatch) => {
    const response = await questions.get(`/${sub}`);
    //console.log(response);
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

export const createQues = (sub, ques, option) => {
  return async (dispatch) => {
    const response = await questions.post(`/${sub}`, { ...ques, option });
    dispatch({ type: "CREATE", payload: response.data });
    history.push("/");
  };
};

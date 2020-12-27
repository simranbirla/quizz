import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import SelectQuiz from "./SelectQuiz";
import Quiz2 from "./Quiz";
import Quiz from "./QuizPage";
import CreateQues from "./CreateQues";
import history from "../history";
const App = () => {
  return (
    <div className="route" style={{ width: "100%" }}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={SelectQuiz} />
          <Route path="/:sub" exact component={Quiz} />
          <Route path="/quiz/create" exact component={CreateQues} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

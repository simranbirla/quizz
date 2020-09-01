import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import SelectQuiz from "./SelectQuiz";
import Quiz1 from "./Quiz1";
import Quiz2 from "./Quiz2";
import CreateQues from "./CreateQues";
import history from "../history";
const App = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={SelectQuiz} />
          <Route path="/quiz1" exact component={Quiz1} />
          <Route path="/quiz2" component={Quiz2} />
          <Route path="/create" component={CreateQues} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

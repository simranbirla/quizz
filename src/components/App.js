import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import SelectQuiz from "./SelectQuiz";
import Quiz1 from "./Quiz1";
import Quiz2 from "./Quiz2";
const App = () => {
  return (
    <div>
      App
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={SelectQuiz} />
          <Route path="/quiz1" exact component={Quiz1} />
          <Route path="/quiz2" component={Quiz2} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

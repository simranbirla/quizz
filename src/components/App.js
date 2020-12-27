import React, { useState } from "react";
import { Route, Switch, Router } from "react-router-dom";
import SelectQuiz from "./SelectQuiz";
import Quiz from "./QuizPage";
import CreateQues from "./CreateQues";
import Login from "./Login";
import history from "../history";
const App = () => {
  const [user, setUser] = useState("");
  const [sign, setSign] = useState(false);
  return (
    <div className="route" style={{ width: "100%" }}>
      <Router history={history}>
        <Switch>
          {!sign ? (
            <Route
              path="/"
              exact
              render={(props) => (
                <Login
                  {...props}
                  user={user}
                  sign={sign}
                  setSign={setSign}
                  setUser={setUser}
                />
              )}
            />
          ) : (
            <Route
              path="/"
              exact
              render={(props) => <SelectQuiz {...props} user={user} />}
            />
          )}
          <Route
            path="/:sub"
            exact
            render={(props) => <Quiz {...props} user={user} />}
          />
          <Route path="/quiz/create" exact component={CreateQues} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

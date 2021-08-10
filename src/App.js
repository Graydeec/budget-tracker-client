import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./component/Header/Header";
import Signup from "./component/Auth/Signup/Signup";
import Signin from "./component/Auth/Signin/Signin";
import Home from "./component/Home/Home";

import "./App.css";
import User from "./component/User/User";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="App--Content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/signin">
              <Signin />
            </Route>
            <Route path="/user">
              <User />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

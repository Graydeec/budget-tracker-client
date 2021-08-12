import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./component/Header/Header";
import Signup from "./component/Auth/Signup/Signup";
import Signin from "./component/Auth/Signin/Signin";
import Home from "./component/Home/Home";
import Trip from "./component/Trip/Trip";
import Error from "./component/Error/Error";

import "./App.css";
import User from "./component/User/User";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="App--Content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route path="/user" component={User} />
            <Route path="/trip" component={Trip} />
            <Route component={Error} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

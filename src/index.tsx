import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/stuff">Stuff</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

class NoMatch extends React.Component {
  render() {
    console.log(location.pathname);
    return (
      <div>
        <h3>
          No match for <code>{location.pathname}</code>
        </h3>
      </div>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}
class About extends React.Component {
  render() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

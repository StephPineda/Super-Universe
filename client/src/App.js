import React from "react";
import "./App.css";
import Biography from "./components/Biography";
import NavBar from "./components/NavBar";
import Stats from "./components/Stats";
import Connect from "./components/Connect";
import Display from "./components/Display";
import Homepage from "./components/Homepage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = { serverMessage: "" };

  // componentDidMount() {
  //   fetch("/api/demo")
  //     .then(response => response.json())
  //     .then(data => this.setState({ serverMessage: data.message }));
  // }

  render() {
    return (
      <>
        <BrowserRouter>
          <>
            <NavBar />
            <Switch>
              <Route path="/home" component={Homepage} />
              <Route path="/bio" component={Biography} />
              <Route path="/stats" component={Stats} />
              <Route path="/connect" component={Connect} />
            </Switch>
          </>
        </BrowserRouter>
        <Display />
      </>
    );
  }
}

export default App;

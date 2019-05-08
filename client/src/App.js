import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Stats from "./components/Stats";
import Display from "./components/Display";
import Homepage from "./components/Homepage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SingleBio from "./components/SingleBio";
import Biography from './components/Biography';
import Connect from './components/Connect';

class App extends React.Component {
  state = { serverMessage: "" };

  render() {
    return (
      <>
        <BrowserRouter>
          <>
            <NavBar />
            <Switch>
              <Route exact path="/home" component={Homepage} />
              <Route exact path="/bio/search" component={Biography} />
              <Route path="/bio/:id" component={SingleBio} />
              <Route exact path="/stats" component={Stats} />
              <Route exact path="/connect" component={Connect} />
            </Switch>
          </>
        </BrowserRouter>
        <Display />
      </>
    );
  }
}

export default App;

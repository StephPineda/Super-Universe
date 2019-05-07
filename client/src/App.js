import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";
import Stats from "./components/Stats";
import Connect from "./components/Connect";
import Display from "./components/Display";
import Homepage from "./components/Homepage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SingleBio from "./components/SingleBio";

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
              <Route exact path="/bio/search" component={SearchBar} />
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

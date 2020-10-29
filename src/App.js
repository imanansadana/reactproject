import React, { Component } from "react";
import ClassComponent from "./Components/ClassComponent/ClassComponent";
import FunctionalComponent from "./Components/FunctionalComponent/FunctionalComponent";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import NameDetails from "./Components/ClassComponent/NameCard/NameDetails/NameDetails";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/class" exact component={ClassComponent} />
            <Route path="/functional" component={FunctionalComponent} />
            <Route path="/class/:id" component={NameDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

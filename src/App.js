import React, { Component } from "react";
import ClassComponent from "./Components/ClassComponent/ClassComponent";
import FunctionalComponent from "./Components/FunctionalComponent/FunctionalComponent";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import LifeCycleMethods from "./Components/LifeCycleMethods/LifeCycleMethods";
import FunctionalHooks from "./Components/FunctionalHooks/FunctionalHooks";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import NameDetails from "./Components/ClassComponent/NameCard/NameDetails/NameDetails";
import LoginForm from "./Components/Forms/LoginForm";
import Counter from "./Components/CounterWithRedux/Counter";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/lifecyclemethods" component={LifeCycleMethods} />
            <Route path="/functionalhooks" component={FunctionalHooks} />
            <Route path="/class" exact component={ClassComponent} />
            <Route path="/functional" component={FunctionalComponent} />
            <Route path="/login" component={LoginForm} />
            <Route path="/class/:id" component={NameDetails} />
            <Route path="/counter" component={Counter} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from "react";

import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Search from "./Components/Search";
import Movie from './Components/Movie';

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navbar title="MovieSearch" />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/movie/:imdbID" component={Movie} />
          </Switch>
          <Footer />
        </Router>
      </Provider>
    );
  }
}

export default App;

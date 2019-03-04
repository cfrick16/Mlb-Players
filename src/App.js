import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {


  render() {
    return (
      <>
        <Router>
          <div>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </Router>
        </>
    );
  }
}

export default App;
//                <Route path="/search/:id" component={query} />

import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Header from './containers/Header';
import Home from './containers/Home';

import './assets/scss/index.scss';

class App extends Component {
  render() {
    return (
      <Container className="app">
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Redirect from="/*" to="/" />
          </Switch>
        </Router>
      </Container>
    );
  }
}

export default App;

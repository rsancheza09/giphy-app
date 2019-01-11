import React, { Component } from 'react';
import { Container } from 'reactstrap';

import Header from './components/Header';

import './assets/scss/index.scss';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Header />
      </Container>
    );
  }
}

export default App;

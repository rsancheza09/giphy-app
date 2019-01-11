import React, { Component } from 'react';
import autobind from 'react-autobind';
import { Container, Row, Col } from 'reactstrap';

import giphyLogo from '../assets/images/giphy-logo.jpg';
import Search from './Search';
import AlertMsg from './AlertMsg';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alertVisible: false,
    };
    autobind(this);
  }

  onDismissAlert() {
    this.setState({
      alertVisible: false,
    });
  }

  render() {
    return (
      <header>
        <Container>
          <Row>
            <Col md="4">
              <h1 className="d-flex align-items-center">
                <img src={ giphyLogo } alt="giphy" />
                Search a GIPHY
              </h1>
            </Col>
            <Col md="6" className="d-flex justify-content-center flex-column">
              <Search handleSearchClick={ () => {} }/>
              <AlertMsg
                type="danger"
                isOpen={ this.state.alertVisible }
                onDismiss={ this.onDismissAlert }
              >
                Please type something!
              </AlertMsg>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}

export default Header;

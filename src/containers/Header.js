import React, { Component } from 'react';
import autobind from 'react-autobind';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import giphyLogo from '../assets/images/giphy-logo.jpg';
import Search from '../components/Search';
import AlertMsg from '../components/AlertMsg';
import GiphySelect from '../components/GiphySelect';

import {
  selectSearchType,
  search,
  clearSearch,
} from '../actions/search';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alertVisible: false,
    };
    autobind(this);

    this.boundActionCreators = bindActionCreators({
      selectSearchType,
      search,
      clearSearch,
    }, props.dispatch);
  }

  onHandleSearch(searchInput) {
    this.props.dispatch(search(searchInput));
  }

  onHandleError() {
    this.setState({
      alertVisible: true,
    }, () => {
      setTimeout(() => {
        this.setState({
          alertVisible: false,
        });
      }, 5000);
    });
  }

  onSelectType(type) {
    this.props.dispatch(selectSearchType(type));
  }

  onDismissAlert() {
    this.setState({
      alertVisible: false,
    });
  }

  onClear() {
    this.props.dispatch(clearSearch());
  }

  render() {
    return (
      <header>
        <Container>
          <Row>
            <Col md="4">
              <h1 className="d-flex align-items-center" onClick={ this.onClear }>
                <img src={ giphyLogo } alt="giphy" />
                Search a GIPHY
              </h1>
            </Col>
            <Col md="6" className="d-flex justify-content-center flex-column">
              <Search
                handleSearchClick={ this.onHandleSearch }
                onError={ this.onHandleError }
              />
            </Col>
          </Row>
          <Row>
            <Col md={ { size: 6, offset: 4 } }>
              <GiphySelect onSelectType={ this.onSelectType } />
            </Col>
          </Row>
          <Row>
            <Col md={ { size: 6, offset: 4 } }>
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

const mapStateToProps = (state) => ({
  searchType: state.search.searchType,
  giphys: state.search.data,
});

export default connect(mapStateToProps)(Header);

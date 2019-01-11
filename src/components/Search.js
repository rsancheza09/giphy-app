import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'react-autobind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
    };
    autobind(this);
  }
  onInputChange(e) {
    this.setState({
      searchInput: e.target.value,
    });
  }
  onHandleSearchClick() {
    const { searchInput } = this.state;
    if (searchInput) {
      this.props.handleSearchClick(searchInput);
    }
  }
  render() {
    return (
      <InputGroup size="lg" className="search">
        <Input
          value={ this.state.searchInput }
          onChange={ this.onInputChange }
          bsSize="lg"
          className="search-field"
        />
        <InputGroupAddon addonType="append">
          <Button
            size="lg"
            onClick={ this.onHandleSearchClick }
          >
            <FontAwesomeIcon icon={ faSearch } />
          </Button>
        </InputGroupAddon>
      </InputGroup>
    );
  }
}

Search.propTypes = {
  handleSearchClick: PropTypes.func.isRequired,
};

export default Search;

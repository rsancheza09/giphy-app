import React, { Component } from 'react';
import { Label, Input, Row, Col } from 'reactstrap';
import autobind from 'react-autobind';
import PropTypes from 'prop-types';

class GiphySelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'gifs',
    };
    autobind(this);
  }
  onChangeType(e) {
    const { value } = e.target;
    this.props.onSelectType(value);
    this.setState({
      type: value,
    });
  }
  render() {
    const { type } = this.state;
    return (
      <Row className="giphy-select">
        <Col md="4">
          <Label check>
            <Input
              type="radio"
              name="giphy-type"
              checked={ type === 'gifs' }
              value="gifs"
              onChange={ this.onChangeType }
            />
            <span>GIFs</span>
          </Label>
        </Col>
        <Col md="4">
          <Label check>
            <Input
              type="radio"
              name="giphy-type"
              checked={ type === 'stickers' }
              value="stickers"
              onChange={ this.onChangeType }
            />
            <span>Stickers</span>
          </Label>
        </Col>
      </Row>
    );
  }
}

GiphySelect.propTypes = {
  onSelectType: PropTypes.func.isRequired,
};

export default GiphySelect;

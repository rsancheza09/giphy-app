import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Giphy = (props) => (
  <Card className="giphy">
    <a href={ props.giphyUrl } target="_blank" rel="noopener noreferrer">
      <CardImg top src={ props.imgUrl } alt={ props.title } />
    </a>
    <CardBody>
      <CardTitle>{ props.title }</CardTitle>
      <Button
        tag="a"
        target="_blank"
        href={ props.giphyUrl }
        className="external-link"
      >
        <FontAwesomeIcon icon={ faEye } />
        { ' ' }Show in GIPHY.com
      </Button>
    </CardBody>
  </Card>
);

Giphy.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  giphyUrl: PropTypes.string.isRequired,
};

export default Giphy;

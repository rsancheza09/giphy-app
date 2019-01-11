import React from 'react';
import { Alert } from 'reactstrap';
import PropTypes from 'prop-types';

const AlertMsg = (props) => {
  const { type, onDismiss, isOpen } = props;
  return (
    <Alert
      color={ type }
      isOpen={ isOpen }
      toggle={ onDismiss }
    >
      { props.children }
    </Alert>
  );
};

AlertMsg.propTypes = {
  type: PropTypes.oneOf(['success', 'danger']).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onDismiss: PropTypes.func.isRequired,
};

export default AlertMsg;

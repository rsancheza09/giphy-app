import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () => (
  <div className="loading d-flex align-items-center justify-content-center">
    <ReactLoading type="bars" />
  </div>
);

export default Loading;

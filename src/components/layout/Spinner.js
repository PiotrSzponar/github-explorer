import React from 'react';

const Spinner = () => (
  <div className="text-center">
    <div
      className="spinner-grow text-secondary m-5"
      style={{ width: '5rem', height: '5rem' }}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

export default Spinner;

import React, { useState } from 'react';
import './progressbar.css';

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar-fill" style={{ width: `${progress}%` }}>
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;

import React from 'react';
import './FullPageLoader.css'; // Import your styles

const FullPageLoader: React.FC = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-container">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default FullPageLoader;

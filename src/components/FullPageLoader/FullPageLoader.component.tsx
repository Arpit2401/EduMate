import React from 'react';
import './FullPageLoader.css'; // Import your styles

const FullPageLoader: React.FC = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default FullPageLoader;

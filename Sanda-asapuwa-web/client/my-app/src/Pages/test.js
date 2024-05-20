import React from 'react';

const test = () => {
  const navigateToAboutPage = () => {
    window.location.href = "./Home"; // Navigate to the About page
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={navigateToAboutPage}>Go to About Page</button>
    </div>
  );
};

export default test;
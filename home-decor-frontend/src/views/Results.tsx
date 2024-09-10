import React from 'react';

const Results: React.FC = () => {
  return (
    <div>
      <h1>Your Style Results</h1>
      <p>Based on your answers, here are some home decor ideas curated for your style.</p>
      
      <div>
        <h2>Suggested Items</h2>
        <ul>
          <li>Modern Sofa</li>
          <li>Minimalist Lamp</li>
          <li>Abstract Wall Art</li>
        </ul>
      </div>
      <button onClick={() => alert("Saved to Mood Board!")}>Save to Mood Board</button>
    </div>
  );
};

export default Results;
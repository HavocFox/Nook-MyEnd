import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuizResultsScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleSave = () => {
    navigate('/save-confirmation');
  };

  return (
    <div>
      <h1>Your Style Results</h1>
      <p>Based on your answers, here are some home decor ideas curated for your style.</p>
      <ul>
        <li>Modern Sofa</li>
        <li>Minimalist Lamp</li>
        <li>Abstract Wall Art</li>
      </ul>
      <button onClick={handleSave}>Save to Mood Board</button>
    </div>
  );
};

export default QuizResultsScreen;
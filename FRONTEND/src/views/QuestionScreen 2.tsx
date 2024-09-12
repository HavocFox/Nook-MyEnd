import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuestionScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/quiz-results');
  };

  return (
    <div>
      <h1>Question 1: What is your preferred color palette?</h1>
      <div>
        <label>
          <input type="radio" name="color" value="Neutral" /> Neutral
        </label>
        <label>
          <input type="radio" name="color" value="Bold" /> Bold
        </label>
        <label>
          <input type="radio" name="color" value="Earthy" /> Earthy
        </label>
        <label>
          <input type="radio" name="color" value="Pastels" /> Pastels
        </label>
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default QuestionScreen;
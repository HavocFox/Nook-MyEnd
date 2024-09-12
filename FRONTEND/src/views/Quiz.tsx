import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Quiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({
    colorPalette: '',
    furnitureStyle: '',
    decorStyle: '',
  });

  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/quiz-results');
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>, key: string) => {
    setAnswers({
      ...answers,
      [key]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Style Quiz</h1>
      <p>Answer a few questions to get personalized home decor recommendations.</p>
      <form>
        {currentStep === 1 && (
          <div>
            <label>What is your preferred color palette?</label>
            <select
              value={answers.colorPalette}
              onChange={(e) => handleSelectChange(e, 'colorPalette')}
            >
              <option value="">Select an option</option>
              <option value="Neutral">Neutral</option>
              <option value="Bold">Bold</option>
              <option value="Earthy">Earthy</option>
              <option value="Pastels">Pastels</option>
            </select>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <label>What kind of furniture style do you prefer?</label>
            <select
              value={answers.furnitureStyle}
              onChange={(e) => handleSelectChange(e, 'furnitureStyle')}
            >
              <option value="">Select an option</option>
              <option value="Modern">Modern</option>
              <option value="Classic">Classic</option>
              <option value="Minimalist">Minimalist</option>
              <option value="Rustic">Rustic</option>
            </select>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <label>What kind of decor style do you like?</label>
            <select
              value={answers.decorStyle}
              onChange={(e) => handleSelectChange(e, 'decorStyle')}
            >
              <option value="">Select an option</option>
              <option value="Industrial">Industrial</option>
              <option value="Bohemian">Bohemian</option>
              <option value="Scandinavian">Scandinavian</option>
              <option value="Traditional">Traditional</option>
            </select>
          </div>
        )}

        <button type="button" onClick={handleNext}>
          {currentStep < 3 ? 'Next' : 'See Results'}
        </button>
      </form>
    </div>
  );
};

export default Quiz;
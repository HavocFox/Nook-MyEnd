import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import MainFeed from './views/MainFeed';
import ContentDetail from './views/ContentDetail';
import MoodBoardSelection from './views/MoodBoardSelection';
import CreateMoodBoard from './views/CreateMoodBoard';
import SaveConfirmation from './views/SaveConfirmation';
import UserProfile from './views/UserProfile';
import UserProfileDetailed from './views/UserProfileDetailed';
import Quiz from './views/Quiz';
import Register from './views/Register';
import Login from './views/Login';
import QuestionScreen from './views/QuestionScreen';
import QuizResultsScreen from './views/QuizResultsScreen';
import CompleteSignUp from './views/CompleteSignUp';
import './App.css';

const App: React.FC = () => {
  return (
    <Auth0Provider
      domain="dev-5bfrbb7a8jmmd6xv.us.auth0.com"
      clientId="DDC4vbLgrXvPalLe2D3SrZMvm3f2Ko3J"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Router basename="/Nook-MyEnd">
        {/* Added basename */}
        <div className="app-container">
          <main style={{ marginTop: '10px' }}>
            <Routes>
              <Route path="/" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/main-feed" element={<MainFeed />} />
              <Route path="/content-detail" element={<ContentDetail />} />
              <Route
                path="/moodboard-selection"
                element={
                  <MoodBoardSelection onClose={() => window.history.back()} />
                }
              />
              <Route path="/create-moodboard" element={<CreateMoodBoard />} />
              <Route path="/complete-signup" element={<CompleteSignUp />} />
              <Route path="/save-confirmation" element={<SaveConfirmation />} />
              <Route path="/user-profile" element={<UserProfile />} />
              <Route path="/user-profile-detailed" element={<UserProfileDetailed />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/question-screen" element={<QuestionScreen />} />
              <Route path="/quiz-results" element={<QuizResultsScreen />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Auth0Provider>
  );
};

export default App;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MoodBoardPreview from '../components/MoodBoardPreview';
import MoodBoardSelection from '../views/MoodBoardSelection';
import '../css/MainFeed.css';
import logoImage from '../assets/NookLogo.png'; 

import LikeIcon from '../assets/LikeIcon.png';
import ShareIcon from '../assets/ShareIcon.png';
import CommentIcon from '../assets/CommentIcon.png';
import SaveIcon from '../assets/SaveIcon.png';

const MainFeed: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false); 

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('token') !== null;
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate]);

  const handleProfileClick = () => {
    navigate('/user-profile-detailed');
  };

  const handleSaveClick = () => {
    setModalOpen(true); 
  };


  const renderUserCard = (username: string, userImageClass: string, contentClass: string) => (
    <div className="user-card">
      
      <div className="user-info" onClick={handleProfileClick}>
        <div className={`profile-picture ${userImageClass}`}></div>
        <h2>{username}</h2>
      </div>

      <div className={`user-content ${contentClass}`}></div>

  
      <div className="user-actions">
        <div className="action-left">
          <button onClick={(e) => e.stopPropagation()}>
            <img src={LikeIcon} alt="Like" />
          </button>
          <button onClick={(e) => e.stopPropagation()}>
            <img src={ShareIcon} alt="Share" />
          </button>
          <button onClick={(e) => e.stopPropagation()}>
            <img src={CommentIcon} alt="Comment" />
          </button>
        </div>
        <div className="action-right">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleSaveClick(); 
            }}
          >
            <img src={SaveIcon} alt="Save" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="main-feed">
     
      <div className="logo-container">
        <img src={logoImage} alt="Nook Logo" className="nook-logo" />
      </div>

   
      <div className="search-bar">
        <input type="text" placeholder="Search..." className="search-input" />
      </div>

      <button className="quiz-button take-quiz-button">Take Style Quiz</button>

 
      {renderUserCard('AndreaLovesColor', 'user-profile1', 'bluecouch-content')}

      <h1 className="moodboard-header">Explore Mood Boards</h1>
      <div className="moodboard-container">
        <MoodBoardPreview name="Retro Kitchen" />
        <MoodBoardPreview name="Pastel Modern" />
        <MoodBoardPreview name="Cottage Core" />
      </div>

   
      {renderUserCard('TammyDecorQueen', 'user-profile2', 'sampleimage-content')}
      {renderUserCard('JeremyAllenDesigns', 'user-profile3', 'sampleimage1-content')}
      {renderUserCard('VintageHouseDesigns', 'user-profile4', 'sampleimage2-content')}


      {isModalOpen && <MoodBoardSelection onClose={() => setModalOpen(false)} />}
    </div>
  );
};

export default MainFeed;
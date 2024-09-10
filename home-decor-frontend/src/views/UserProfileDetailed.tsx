import React, { useState } from 'react';
import UserTabNavigation from '../components/UserTabNavigation';
import UserContent from '../components/UserContent';
import '../css/UserProfileDetailed.css';
import userProfileImage from '../assets/user-profile3.jpg'; 
import logoImage from '../assets/NookLogo.png'; 

const UserProfileDetailed: React.FC = () => {
  const [activeTab, setActiveTab] = useState('posts');

  return (
    <div className="user-profile-container">
     
      <div className="nook-logo-container">
        <img src={logoImage} alt="Nook Logo" className="nook-logo-profile" />
      </div>

  
      <div className="user-profile-header">
        <img src={userProfileImage} alt="User Profile" />
        <div className="user-profile-info">
          
          <h2 className="user-profile-name">Yelena_Jones</h2>
          <p className="user-profile-bio">
            🌸 Lover of pink, pretty, and playful decor! Obsessed with soft pastels, and cozy textures. Always dreaming up chic, feminine vibes. Let’s connect! ✨
          </p>
          <button className="follow-button" onClick={() => alert('Followed!')}>Follow</button>
        </div>
      </div>

  
      <UserTabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <UserContent activeTab={activeTab} />
    </div>
  );
};

export default UserProfileDetailed;
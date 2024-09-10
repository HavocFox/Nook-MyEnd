import React, { useState } from 'react';
import Tabs from '../components/Tabs';  

const UserProfile: React.FC = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div>
      <h1>User Profile</h1>
      <p>View the user's style, mood boards, and shared content.</p>

      <button onClick={handleFollowClick}>
        {isFollowing ? 'Following' : 'Follow'}
      </button>

      <button onClick={() => window.location.href = '/engagement-screen'}>View More</button>

      <Tabs />  
    </div>
  );
};

export default UserProfile;
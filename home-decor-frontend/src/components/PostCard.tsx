import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface PostCardProps {
  username: string;
  content: string;
  userId: string;
  postId: string;
}

const PostCard: React.FC<PostCardProps> = ({ username, content, userId, postId }) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState<string | null>(null);

  const likePost = async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(`Liked post ${postId}!`), 1000);
    });
  };

  const commentOnPost = async (comment: string) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(`Comment added: ${comment} on post ${postId}`), 1000);
    });
  };

  const sharePost = async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(`Post ${postId} shared!`), 1000);
    });
  };

  const savePost = async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(`Post ${postId} saved!`), 1000);
    });
  };

  const handleLike = async () => {
    try {
      const result = await likePost();
      setMessage(result as string);
    } catch (error) {
      console.error("Error liking the post", error);
    }
  };

  const handleComment = async () => {
    try {
      const result = await commentOnPost("Great post!");
      setMessage(result as string);
    } catch (error) {
      console.error("Error commenting on the post", error);
    }
  };

  const handleShare = async () => {
    try {
      const result = await sharePost();
      setMessage(result as string);
    } catch (error) {
      console.error("Error sharing the post", error);
    }
  };

  const handleSave = async () => {
    try {
      const result = await savePost();
      setMessage(result as string);
    } catch (error) {
      console.error("Error saving the post", error);
    }
  };

  const goToUserProfile = () => {
    navigate(`/user-profile/${userId}`);
  };

  return (
    <div className="post-card">
      <div className="profile-picture" onClick={goToUserProfile}>
        <img src="https://via.placeholder.com/150" alt="Profile" />
      </div>
      <h2>{username}</h2>
      <div className="post-content">
        <p>{content}</p>
      </div>
      <div className="post-actions">
        <button onClick={handleLike}>Like</button>
        <button onClick={handleComment}>Comment</button>
        <button onClick={handleShare}>Share</button>
        <button onClick={handleSave}>Save</button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PostCard;
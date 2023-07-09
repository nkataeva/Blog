import React from 'react';
import s from './PostsPage.module.scss'
import { observer } from 'mobx-react-lite';
import Post from '../components/Post';
import postStore from '../store/PostStore';
import { useNavigate } from 'react-router-dom';

const PostsPage = observer(() => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/postid');
  }
  
  return (
    <div className={s.posts}>
      {postStore.posts.map((post, index) => (
        <Post key={index} {...post} onClick={handleClick} sx={{ cursor: 'pointer' }} />
      ))}
    </div>
  );
})

export default PostsPage;

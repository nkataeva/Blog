import React from 'react';
import s from './PostsPage.module.scss'
import { observer } from 'mobx-react-lite';
import PostCard from '../components/PostCard';
import postStore from '../store/PostStore';
import { Link } from 'react-router-dom';


const PostsPage = observer(() => {
  return (
    <div className={s.posts}>
      {postStore.posts.map((post, index) => (
        <Link key={index} to={`/posts/${index}`} style={{textDecoration: 'none'}}>
          <PostCard {...post} />
        </Link>
      ))}
    </div>
  );
})

export default PostsPage;
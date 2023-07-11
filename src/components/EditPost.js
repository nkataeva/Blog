import React, { useState } from "react";
import postStore from "../store/PostStore";
import PostForm from "./PostForm";

const EditPost = ({ idPost }) => {
  const [post, setPost] = useState(postStore.getPostById(idPost));
  
  return <PostForm initData={post} editable={true} idPost={idPost}/>;
};

export default EditPost;
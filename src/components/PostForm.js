import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import postStore from "../store/PostStore";
import { useNavigate } from "react-router-dom";

const PostForm = ({ initData, editable, idPost }) => {
    const likes = 0;
    const [post, setPost] = useState(initData);
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPost((prevPost) => ({
            ...prevPost,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const dateCreate = new Date().toLocaleDateString(); 
        const newPost = {
            ...post,
            dateCreate,
            likes,
        };
        postStore.addPost(newPost);
        navigate(`/posts`);
    };

    const handleEdit = (event) => {
        event.preventDefault();
        const editData = {
            ...post
        }
        postStore.editPost(idPost, editData)
    }

    return (
        <form onSubmit={editable ? handleEdit : handleSubmit}>
            <TextField
                name="title"
                label="Заголовок"
                value={post?.title}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                required
            />
            <TextField
                name="body"
                label="Текст поста"
                value={post?.body}
                onChange={handleInputChange}
                multiline
                rows={8}
                fullWidth
                margin="normal"
                required
            />
            <TextField
                name="image"
                label="URL изображения"
                value={post?.image}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
            />
            <TextField
                name="author"
                label="Автор"
                value={post?.author}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                required
            />
            <Button type="submit" variant="contained" color="primary" sx={{mt: 2}}>
                {editable ? "Сохранить изменения" : "Создать пост"}
            </Button>
        </form>
    );
};

export default PostForm;

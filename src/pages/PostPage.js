import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import postStore from "../store/PostStore";
import { observer } from "mobx-react-lite";
import ModalWindow from '../components/ModalWindow'
import { Favorite } from '@mui/icons-material';
import s from './PostPage.module.scss';
import noimage from '../images/noimage.jpg';
import { Button } from "@mui/material";


const PostPage = observer(() => {
    const postId = Number(useParams().postId);
    const navigate = useNavigate();

    const postData = postStore.getPostById(postId);

    const handleLike = () => {
        postStore.likePost(postId);
    }

    const handleEdit = () => {
        setModalOpen(true);
    }

    const handleDelete = () => {
        postStore.deletePost(postId);
        navigate('/posts');
    }

    const [modalOpen, setModalOpen] = React.useState(false);

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div className={s.container}>
            <h5 className={s.title}>{postData.title}</h5>
            <img src={postData.image || noimage} alt='post-img' className={s.image} />
            <p className={s.info}>{`by ${postData.author} on ${postData.dateCreate}`}</p>
            <p className={s.body}>{postData.body}</p>

            <button className={s.likes} onClick={handleLike}>
                <Favorite />
                {postData.likes}
            </button>

            <div className={s.buttons}>
                <Button onClick={handleEdit} variant="contained" color="primary">Изменить</Button>
                <Button onClick={handleDelete} variant="contained" color="primary">Удалить</Button>
            </div>

            <ModalWindow open={modalOpen} handleClose={handleCloseModal} idPost={postId} />
        </div>
    )
})

export default PostPage;
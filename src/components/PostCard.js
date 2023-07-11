import noimage from '../images/noimage.jpg';
import { Favorite } from '@mui/icons-material';
import s from '../styles/PostCard.module.scss';

const PostCard = ({ title, image, author, dateCreate, likes }) => {
    return (
        <div className={s.card}>
            <p className={s.title}>{title}</p>
            <img src={image || noimage} alt='post-img' className={s.img}/>
            <p className={s.info}>{author} | {dateCreate}</p>
            <div className={s.likes}><Favorite />
                {likes}
            </div>
        </div >
    );
};

export default PostCard;
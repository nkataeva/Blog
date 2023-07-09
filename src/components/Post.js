import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';

const Post = ({ title, body, image, author, dateCreate, likes }) => {
    
    return (
        <Card>
            <CardHeader title={title} />
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt="post-image"
            />
            <CardContent >
            <Typography variant="body2" color="textSecondary" component="p" maxHeight='20px'>
                {body}
            </Typography>
            <Typography variant="caption" color="textSecondary">
                {author} | {dateCreate}
            </Typography>
            <Typography variant="caption" color="textSecondary">
                Likes: {likes}
            </Typography>
        </CardContent>
        </Card >
    );
};

export default Post;
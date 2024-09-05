import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router-dom';

const Post = (props) => {
    // console.log(props.post)
    // const { userId, title, body } = props.post;
    const title = props.post.title;
    const userId = props.post.userId;
    const id = props.post.id;
    const body = props.post.body;
    // console.log(title)
    return (
        <div className='post'>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link className='post-btn' to={"/post/" + id} size="small" color="primary">
                        Show Comments
                    </Link>
                </CardActions>
            </Card>
        </div>
    );
};

export default Post;
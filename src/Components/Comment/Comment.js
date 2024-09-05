import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CommentBox from '../CommentBox/CommentBox';
import './Comment.css';

const Comment = () => {
    const { commentId } = useParams();
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(data => setComments(data));
    }, []);
    // console.log(comments)
    return (
        <div>
            <h1 className='heading'>Comment</h1>
            {
                // comments.filter(comment => comment.id === parseInt(commentId)).map(comment => )
                comments.map(comment => {
                    // console.log(comment.postId)
                    if (comment.postId === parseInt(commentId)) {
                        return (
                            <CommentBox comment={comment}></CommentBox>
                        )
                    }
                })
            }
            <Link className='goto-home' to='/'>Goto Home</Link>
        </div>
    );
};

export default Comment;
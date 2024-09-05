import React, { useEffect, useState } from 'react';
import './CommentBox.css'

const CommentBox = (props) => {
    const { name, email, body, postId, id } = props.comment;
    // const [userImg, setUserImg] = useState('');

    // console.log(props.comment);
    // let url = '';
    // if (parseInt(id) % 2 == 0 && parseInt(postId) % 2 == 0) {
    //     url = (`https://randomuser.me/api/portraits/med/men/${id}.jpg`)
    // }
    // else if (parseInt(id) % 2 != 0 && parseInt(postId) % 2 != 0) {
    //     url = (`https://randomuser.me/api/portraits/med/women/${id}.jpg`)
    // }
    // setUserImg(url)
    return (
        <div className='comment-box'>
            <div className='img-name'>
                <img src={`https://randomuser.me/api/portraits/med/women/${id}.jpg`} alt="" />
                <h2>{name}</h2>
            </div>
            <p>Email: {email}</p>
            <p>{body}</p>
        </div>
    );
};

export default CommentBox;
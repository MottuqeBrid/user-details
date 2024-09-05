import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, [])
    return (
        <div>
            <h1 className='heading'>All post page</h1>
            <div className='posts'>
                {posts.map(post => <Post key={post.id} post={post}></Post>)}
            </div>

        </div>
    );
};

export default Home;
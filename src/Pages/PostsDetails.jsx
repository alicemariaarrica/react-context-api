
import React from 'react';
import { useParams } from 'react-router-dom';
import { usePosts } from '../context/PostContext';

function PostDetails() {
    const { id } = useParams();
    const { posts } = usePosts();

    const post = posts[id];

    if (!post) {
        return <p>Post non trovato!</p>;
    }

    return (
        <div>
            <h1>{post.name}</h1>
            <img src={post.image} alt={post.name} />
            <p>{post.content}</p>
        </div>
    );
}

export default PostDetails;

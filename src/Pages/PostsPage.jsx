
import React from 'react';
import { usePosts } from '../context/PostContext';
import { Link } from 'react-router-dom';

function PostsPage() {
    const { posts } = usePosts();

    return (
        <div>
            <h1>Lista dei Post</h1>
            <p>Qui puoi trovare tutti i post disponibili:</p>
            <div className="posts">
                {posts.map((post, index) => (
                    <div key={index}>
                        <h2>
                            <Link to={`/posts/${index}`}>{post.name}</Link>
                        </h2>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PostsPage;

import { Link } from 'react-router-dom';

export default function PostCard({ post, index }) {
    return (
        <div className="post-card">
            <h3>
                <Link to={`/posts/${index}`}>{post.name}</Link>
            </h3>
            <img src={post.image} alt={post.name} />
            <p>{post.content}</p>
        </div>
    );
}

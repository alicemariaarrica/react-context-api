import { useParams } from 'react-router-dom';
import postsList from '../data/postslist';

export default function PostDetails() {
    const { id } = useParams();
    const post = postsList[id];

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
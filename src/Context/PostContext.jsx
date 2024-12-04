
import React, { createContext, useState, useContext, useEffect } from 'react';
import postsList from '../data/postslist';


const PostContext = createContext();


export function PostProvider({ children }) {
    const [posts, setPosts] = useState([]);


    useEffect(() => {

        setPosts(postsList);
    }, []);

    return (
        <PostContext.Provider value={{ posts }}>
            {children}
        </PostContext.Provider>
    );
}


export const usePosts = () => {
    const context = useContext(PostContext);
    if (!context) {
        throw new Error('usePosts deve essere usato all\'interno di un PostProvider');
    }
    return context;
};

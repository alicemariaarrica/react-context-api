import React, { createContext, useContext, useState } from 'react';
import postsList from '../data/PostsList';

const PostContext = createContext();


export const PostProvider = ({ children }) => {
    const [posts] = useState(postsList);

    return (
        <PostContext.Provider value={{ posts }}>
            {children}
        </PostContext.Provider>
    );
};


export const usePosts = () => useContext(PostContext);

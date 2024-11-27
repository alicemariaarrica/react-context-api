import React, { createContext, useState, useContext } from 'react';
import exoticFruits from './PostsLists';


const FruitContext = createContext();


export const useFruits = () => useContext(FruitContext);


export const PostsProvider = ({ children }) => {
    const [fruits, setFruits] = useState(exoticFruits);

    return (
        <FruitContext.Provider value={{ fruits, setFruits }}>
            {children}
        </FruitContext.Provider>
    );
};

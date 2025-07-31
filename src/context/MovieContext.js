import { createContext, useContext, useState } from 'react';

const MovieContext = createContext();

export function MovieProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (movie) => {
        setFavorites([...favorites, movie]);
    };

    const removeFromFavorites = (movieId) => {
        setFavorites(favorites.filter(movie => movie.id !== movieId));
    };

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId);
    };

    return (
        <MovieContext.Provider value={{
            favorites,
            addToFavorites,
            removeFromFavorites,
            isFavorite
        }}>
            {children}
        </MovieContext.Provider>
    );
}

export function useMovieContext() {
    const context = useContext(MovieContext);
    if (!context) {
        throw new Error('useMovieContext must be used within a MovieProvider');
    }
    return context;
}

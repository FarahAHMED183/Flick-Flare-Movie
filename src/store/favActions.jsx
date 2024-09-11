export const addFavorite = (movie) => {
    return {
      type: 'ADD_FAVORITE',
      payload: movie,
    };
  };
  
  export const removeFavorite = (movie) => {
    return {
      type: 'REMOVE_FAVORITE',
      payload: movie,
    };
  };
  
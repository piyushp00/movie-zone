// {
//     type: 'ADD_MOVIES'
//     movies:[m1, m2, m3]
// }

// {
//     type: 'DECREASE_COUNT'
//     user:{}
// }

//action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

//action creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}

export function addToFavorites(movie) {
  return {
    type: ADD_TO_FAVORITES,
    movie,
  };
}

export function removeFromFavorites(movie) {
  return {
    type: REMOVE_FROM_FAVORITES,
    movie,
  };
}

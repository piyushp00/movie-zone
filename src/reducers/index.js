import {
  ADD_MOVIES,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  SET_SHOW_FAVORITES,
} from "../actions";

const initialMovieState = {
  list: [],
  favourites: [] ,
  showFavourites: false,
};

export default function movies(state = initialMovieState, action) {
  // if(action.type === ADD_MOVIES){
  //     return {
  //         ...state,
  //         list: action.movies
  //     }
  // }
  // return state;

  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };

    case ADD_TO_FAVORITES: 
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };

    case REMOVE_FROM_FAVORITES:
      const filteredArray = state.favourites.filter(
        (movie) => movie.Title !== action.movie.Title
      );

      return {
        ...state,
        favourites: filteredArray,
      };

    case SET_SHOW_FAVORITES:
      return {
        ...state,
        showFavourites: action.val,
      };

    default:
      return state;
  }
}

import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavorites } from "../actions";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;

    //subscribe to the store
    store.subscribe(() => {
      console.log("UPDATED");
      this.forceUpdate(); //we should not use this
      //this.setState({});
    });

    // make api call

    //dispatch an action
    console.log("DISPATCH ACTION");
    store.dispatch(addMovies(data));

    console.log("STATE", this.props.store.getState());
  }

  isMovieFavorite = (movie) => {
    const { movies } = this.props.store.getState();

    const index = movies.favourites.indexOf(movie);

    if (index !== -1) {
      //found the movie
      return true;
    }
    return false;
  };

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavorites(val));
  };

  render() {
    console.log("render", this.props.store.getState());
    const { movies } = this.props.store.getState(); //{ movies: {}, search: {} }
    const { list, favourites, showFavourites } = movies; 

    const displayMovies = showFavourites ? favourites : list;

    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favorites
            </div>
          </div>

          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
                isFavorite={this.isMovieFavorite(movie)}
              />
            ))}
          </div>
          {displayMovies.length === 0 ? (
            <div className="no-movie">No movies to display!</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;

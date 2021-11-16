import React from "react";
import { addToFavorites, removeFromFavorites } from "../actions";

class MovieCard extends React.Component {
  handleFavoriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(addToFavorites(movie));
  };

  handleUnFavoriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(removeFromFavorites(movie));
  };

  render() {
    const { movie, isFavorite } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-poster" src={movie.Poster} />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="year left-margin">{movie.Year}</div>
          <div className="genre left-margin">{movie.Genre}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {isFavorite ? (
              <button
                className="unfavourite-btn"
                onClick={this.handleUnFavoriteClick}
              >
                UnFavorite
              </button>
            ) : (
              <button
                className="favourite-btn"
                onClick={this.handleFavoriteClick}
              >
                Favorite
              </button>
            )}
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}

export default MovieCard;

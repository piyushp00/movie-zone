import React from "react";

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
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
            <button className="favourite-btn">Favorite</button>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}

export default MovieCard;

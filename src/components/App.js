import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies } from "../actions";

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
    const { favourites } = this.props.store.getState();

    const index = favourites.indexOf(movie);

    if (index !== -1) {
      //found the movie
      return true;
    }
    return false;
  };

 

  render() {
    console.log("render", this.props.store.getState());
    const { list } = this.props.store.getState(); //{list: {}, favourites: []}
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab" >Favorites</div>
          </div>

          <div className="list">
            {list.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
                isFavorite={this.isMovieFavorite(movie)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

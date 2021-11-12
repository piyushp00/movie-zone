import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import {addMovies} from "../actions"

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

  render() {
    console.log("render");
    const movies = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favorites</div>
          </div>

          <div className="list">
            {movies.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

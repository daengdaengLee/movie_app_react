import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this._getMovies();
  }

  _callAPI() {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(res => res.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err));
  }

  async _getMovies() {
    const movies = await this._callAPI();
    this.setState({ movies });
  }

  _renderMovies() {
    return this.state.movies.map(movie => {
      return <Movie
        title={movie.title_english}
        poster={movie.medium_cover_image}
        genres={movie.genres}
        synopsis={movie.synopsis}
        key={movie.id}
      />;
    });
  }

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App__loading"}>
        {movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;

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

  render() {
    return (
      <div className="App">
        <Movie
          title="Movie test"
          poster="https://source.superherostuff.com/wp-content/uploads/2017/05/7773769005_star-wars.jpg"
          genres={['SF', 'Action']}
          synopsis="Jedi vs Sith"
        />
      </div>
    );
  }
}

export default App;

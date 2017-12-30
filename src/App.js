import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

class App extends Component {
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

import React from 'react';

function Movie({title, poster, genres, synopsis}) {
  return (
    <div className="Movie">
      <div className="Movie__Column">
        <img src={poster} alt={title} />
      </div>
      <div className="Movie__Column">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          <span className="Movie__Genre">{genres[0]}</span>
          <span className="Movie__Genre">{genres[1]}</span>
        </div>
        <p className="Movie__Synopsis">
          {synopsis}
        </p>
      </div>
    </div>
  )
}

export default Movie;

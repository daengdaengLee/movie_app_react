import React from 'react';
import PropTypes from 'prop-types';

function MoviePoster({poster, alt}) {
  return (
    <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
  )
}

export default MoviePoster;

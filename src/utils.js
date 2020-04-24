import React from 'react'

function toggleMovieProp(movies, options = {}) {
  let {prop, movie} = options
  let myMovie = movies[movie.id]
  if (myMovie) {
    myMovie[prop] = !myMovie[prop]
    movies[movie.id] = myMovie
  } else {
    movie[prop] = true
    movies[movie.id] = movie
  }
  return movies
}
export {toggleMovieProp}

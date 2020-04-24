import React from 'react'
import * as api from 'src/api'

function useMovieSearch(query) {
  let [loading, setLoading] = React.useState(false)
  let [error, setError] = React.useState(null)
  let [movies, setMovies] = React.useState(null)

  React.useEffect(() => {
    let current = true

    if (query.length >= 1) {
      setLoading(true)
      setError(null)
      api
        .movieSearch(query)
        .then(movies => current && setMovies(movies.results))
        .catch(error => current && setError(error.message))
        .finally(() => current && setLoading(false))
    }
    return () => (current = false)
  }, [query])

  return {movies, error, loading}
}

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
export {useMovieSearch, toggleMovieProp}

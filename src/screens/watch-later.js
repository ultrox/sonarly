import React from 'react'
import MovieList from 'src/components/MovieList'
import * as ls from 'src/components/useLocalStorage'

function WatchLater() {
  let later = []
  let allMovies = ls.get()

  Object.keys(allMovies).forEach(id => {
    let cur = allMovies[id]
    cur.later && later.push(cur)
  })

  return <MovieList movies={later} />
}

export default WatchLater

/* favorite.js Page */

import React from 'react'
import MovieList from 'src/components/MovieList'
import * as ls from 'src/components/useLocalStorage'

function FavoriteScreen() {
  let favorited = []
  let allMovies = ls.get()

  Object.keys(allMovies).forEach(id => {
    let cur = allMovies[id]
    cur.favorited && favorited.push(cur)
  })

  return <MovieList movies={favorited} />
}

export default FavoriteScreen

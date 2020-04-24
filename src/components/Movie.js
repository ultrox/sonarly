import React from 'react'
import {IconFavorite, IconClock, IconCheck} from './Icon'
import MoviePlaceholder from 'src/styles/placeholder.svg'
import * as ls from 'src/components/useLocalStorage'
import {toggleMovieProp} from 'src/utils'

function Movie({movie}) {
  let [isFav, setFav] = React.useState(movie.favorited)
  let [later, toggleLater] = React.useState(movie.later)

  function toggleWatchLater() {
    let movies = toggleMovieProp(ls.get(), {prop: 'later', movie})
    ls.set(movies)
    toggleLater(l => !l)
  }

  function toggleFavorited() {
    let movies = toggleMovieProp(ls.get(), {prop: 'favorited', movie})
    ls.set(movies)
    setFav(l => !l)
  }

  return (
    <div className="movie">
      <div className="poster-wrapper">
        <button className="favorite-button" onClick={toggleFavorited}>
          <IconFavorite className={`favorite-svg ${isFav && 'favorited'}`} />
        </button>

        <button className="history-button" onClick={toggleWatchLater}>
          {later ? (
            <IconCheck className="history-button-svg" />
          ) : (
            <IconClock className="history-button-svg" />
          )}
        </button>

        <img
          alt="movie poster"
          className="poster"
          src={genPosterURL(movie.poster_path)}
        />
      </div>
      <div className="title">{movie.title}</div>
      <div className="year">{movie.release_date}</div>
    </div>
  )
}

function genPosterURL(pp, options = {w: '220', h: '330'}) {
  const {w, h} = options

  let posterUrl = pp
    ? `https://image.tmdb.org/t/p/w${w}_and_h${h}_face${pp}`
    : MoviePlaceholder
  return posterUrl
}
export default Movie

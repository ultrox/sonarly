import React from 'react'
import {IconFavorite, IconClock} from './Icon'

function Movie({movie}) {
  return (
    <div className="movie">
      <div className="poster-wrapper">
        <button className="favorite-button">
          <IconFavorite className="favorite-svg" />
        </button>

        <button className="history-button">
          <IconClock className="history-button-svg" />
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
  console.log(pp)
  const {w, h} = options

  let URL = pp
    ? `https://image.tmdb.org/t/p/w${w}_and_h${h}_face${pp}`
    : `https://image.tmdb.org/t/p/w220_and_h330_face/eiVQORVyVuNNZHPAELuWtlXoQsD.jpg`

  return URL
}
export default Movie

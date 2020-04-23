import React from 'react'
import {IconFavorite, IconClock} from './Icon'

function Movie({movie}) {
  let imgUrl =
    'https://image.tmdb.org/t/p/w220_and_h330_face/eiVQORVyVuNNZHPAELuWtlXoQsD.jpg'

  return (
    <div className="movie">
      <div className="poster-wrapper">
        <button className="favorite-button">
          <IconFavorite className="favorite-svg" />
        </button>

        <button className="history-button">
          <IconClock className="history-button-svg" />
        </button>

        <img alt="movie poster" className="poster" src={imgUrl} />
      </div>
      <div className="title">{movie.title}</div>
      <div className="year">{movie.year}</div>
    </div>
  )
}
export default Movie

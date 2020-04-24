import React from 'react'
import {IconSadbaby} from 'src/components/Icon'
import {Container} from 'src/styles/layout'
import Movie from 'src/components/Movie'
import ErrorOrEmptyMsg from 'src/components/ErrorOrEmptyMsg'
import * as ls from 'src/components/useLocalStorage'

const EMPTY_MSG = "You don't have any movies here."

function MovieList({loading, error, movies, type = ''}) {
  let myMovies = ls.get()

  if (error) {
    return (
      <ErrorOrEmptyMsg>
        <IconSadbaby className="empty-error-icon" />
        <p>{error}</p>
      </ErrorOrEmptyMsg>
    )
  }
  return (
    <main className="main">
      <Container>
        {Array.isArray(movies) && movies.length > 0 ? (
          <div className="content-wrapper">
            {movies.map(m => {
              m.favorited = myMovies[m.id]?.favorited ?? false
              m.later = myMovies[m.id]?.later ?? false

              return <Movie key={m.id} movie={m} />
            })}
          </div>
        ) : (
          <ErrorOrEmptyMsg>
            <IconSadbaby className="empty-error-icon" />
            <p>{EMPTY_MSG}</p>
          </ErrorOrEmptyMsg>
        )}
      </Container>
    </main>
  )
}

export default MovieList

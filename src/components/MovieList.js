import React from 'react'
import {IconSadbaby} from 'src/components/Icon'
import {Container} from 'src/styles/layout'
import Movie from 'src/components/Movie'
import ErrorOrEmptyMsg from 'src/components/ErrorOrEmptyMsg'

function MovieList({loading, error, movies, type = ''}) {
  if (error) {
    return (
      <ErrorOrEmptyMsg>
        <IconSadbaby />
        <p>There are no Movies here.</p>
      </ErrorOrEmptyMsg>
    )
  }

  return (
    <main className="main">
      <Container>
        {movies.length === 0 ? (
          <ErrorOrEmptyMsg>
            <IconSadbaby className="empty-error-icon" />
            <p>You don't have any movies here.</p>
          </ErrorOrEmptyMsg>
        ) : (
          <div className="content-wrapper">
            {movies.map(m => (
              <Movie key={m.id} movie={m} />
            ))}
          </div>
        )}
      </Container>
    </main>
  )
}

export default MovieList

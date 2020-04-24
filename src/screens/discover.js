/* discover.js Page */

import React from 'react'
import SearchBox from 'src/components/SearchBox'
import {Container} from 'src/styles/layout'
import {useMovieSearch} from 'src/utils'
import MoviesList from 'src/components/MovieList'
import {IconHappyBaby} from 'src/components/Icon'
import ErrorOrEmptyMsg from 'src/components/ErrorOrEmptyMsg'
import Loading from 'src/components/Loading'

function Discover() {
  const [query, setQuery] = React.useState('')
  const {movies, error, loading} = useMovieSearch(query)
  const [hasSearched, setHasSearched] = React.useState()

  function handleOnSearch(title) {
    setHasSearched(true)
    setQuery(title)
  }

  return (
    <div>
      <Container>
        <SearchBox onMovieSearch={handleOnSearch} loading={loading} />
      </Container>
      <Container>
        {loading ? (
          <Loading />
        ) : hasSearched ? (
          <MoviesList movies={movies} error={error} loading={loading} />
        ) : (
          <ErrorOrEmptyMsg>
            <IconHappyBaby />
            <p>Lets find some movies!</p>
          </ErrorOrEmptyMsg>
        )}
      </Container>
    </div>
  )
}

export default Discover

import React from 'react'
import {Container} from 'src/styles/layout'
import MovieList from 'src/components/MovieList'
import SearchBox from 'src/components/SearchBox'
import Header from 'src/components/Header'
import * as api from 'src/api'
import 'src/styles/App.css'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// let initState = {
//   loading: false,
//   error: null,
//   movies: [],
// }

let movie = {
  title: 'Batman is grate guy',
  year: '2020',
  id: 12,
}

export default function App() {
  const [movies, setMovies] = React.useState([])
  const [error, setError] = React.useState(null)
  const [isLoading, setLoading] = React.useState(false)

  function handleMovieSearch(query) {
    setLoading(true)
    setError(null)
    api
      .movieSearch(query)
      .then(data => setMovies(data.results))
      .catch(err => setError(err?.message ?? null))
      .finally(() => setLoading(false))
  }

  return (
    <Router>
      <Header />

      <Container>
        <SearchBox onMovieSearch={handleMovieSearch} />
      </Container>

      <div>
        <Switch>
          <Route exact path="/">
            <MovieList movies={movies} error={error} loading={isLoading} />
          </Route>
          <Route path="/later">
            <p>Later</p>
          </Route>
          <Route path="/favorites">
            <p>Favorites</p>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

import React from 'react'
import {Container} from 'src/styles/layout'
import MovieList from 'src/components/MovieList'
import SearchBox from 'src/components/SearchBox'
import Header from 'src/components/Header'
import 'src//styles/App.css'

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
  let movies = [movie]
  let favorites = []
  let later = []

  return (
    <Router>
      <Header />

      <Container>
        <SearchBox onMovieSearch={() => {}} />
      </Container>

      <div>
        <Switch>
          <Route exact path="/">
            <MovieList movies={movies} />
          </Route>
          <Route path="/later">
            <MovieList movies={later} />
          </Route>
          <Route path="/favorites">
            <MovieList movies={favorites} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

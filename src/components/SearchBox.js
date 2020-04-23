import React from 'react'
import {IconMovie, IconSearch} from './Icon'

function SearchMovie({onMovieSearch}) {
  let [title, setTitle] = React.useState('')

  return (
    <form
      className="search-wrapper"
      method="POST"
      onSubmit={e => {
        e.preventDefault()
        onMovieSearch(title)
      }}
    >
      <IconMovie className="search-svg" />
      <input
        onChange={e => setTitle(e.target.value)}
        aria-label="search input"
        className="search__input"
        placeholer="Search Movies"
        value={title}
      />
      <button aria-label="search" className="search-icon">
        <IconSearch className="search-svg" />
      </button>
    </form>
  )
}

export default SearchMovie

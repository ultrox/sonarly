import React from 'react'
import {IconMovie, IconSearch} from './Icon'

function SearchBox({onMovieSearch, loading}) {
  function handleSubmit(event) {
    event.preventDefault()
    onMovieSearch(event.target.elements.search.value)
  }

  return (
    <form className="search-wrapper" method="POST" onSubmit={handleSubmit}>
      <IconMovie className="search-svg" />
      <input
        id="search"
        disabled={loading}
        aria-label="search input"
        className="search__input"
        placeholer="Search Movies"
      />
      <button disabled={loading} aria-label="search" className="search-icon">
        <IconSearch className="search-svg" />
      </button>
    </form>
  )
}

export default SearchBox

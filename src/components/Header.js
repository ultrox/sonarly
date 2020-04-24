import React from 'react'
import {Logo, IconHart, IconSearch, IconClock} from './Icon'
import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          <Logo />
        </NavLink>
      </div>
      <nav className="header-nav">
        <NavLink
          activeClassName="header-nav_link--active"
          className="header-nav_link"
          to="/favorites"
          aria-label="Go to favorites"
        >
          <IconHart className="header-nav_link-svg" />
        </NavLink>
        <NavLink
          to="later"
          activeClassName="header-nav_link--active"
          className="header-nav_link"
          aria-label="Go to watch later"
        >
          <IconClock className="header-nav_link-svg" />
        </NavLink>
        <NavLink
          activeClassName="header-nav_link--active"
          className="header-nav_link"
          aria-label="Go to search"
          exact="true"
          to="/"
        >
          <IconSearch className="header-nav_link-svg" />
        </NavLink>
      </nav>
    </header>
  )
}

export default Header

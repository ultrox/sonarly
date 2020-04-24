import React from 'react'
import 'src/styles/App.css'
import WatchLaterScreen from 'src/screens/watch-later'
import FavoriteScreen from 'src/screens/favorite'
import DiscoverScreen from 'src/screens/discover'
import NotFoundScreen from 'src/screens/not-found'
import Header from 'src/components/Header'
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'

export default function App() {
  return <AppRoutes />
}

function AppRoutes() {
  return (
    <div>
      <Router basename="/discover">
        <Header />
        <Routes>
          <Route path="/" element={<DiscoverScreen />} />
          <Route path="/later" element={<WatchLaterScreen />} />
          <Route path="/favorites" element={<FavoriteScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </Router>
    </div>
  )
}

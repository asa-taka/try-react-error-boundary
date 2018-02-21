import React, { Component } from 'react'
import ErrorBoundary from './ErrorBoundary'
import './App.css'

const App = () => {
  return (
    <ErrorBoundary>
      <div className="App" />
    </ErrorBoundary>
  )
}

export default App

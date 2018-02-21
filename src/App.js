import React, { Component } from 'react'
import ErrorBoundary from './ErrorBoundary'
import ErrorEmitter from './ErrorEmitter'
import './App.css'

const App = () => {
  return (
    <ErrorBoundary name="App Root">
      <ErrorEmitter />
      <div className="App" />
    </ErrorBoundary>
  )
}

export default App

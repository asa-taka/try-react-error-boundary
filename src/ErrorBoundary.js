import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null, info: null }
  }

  componentDidCatch(error, info) {
    this.setState({ error, info })
  }

  render() {
    const { error, info } = this.state
    if (error) {
      return <h1>{this.props.name}: {error.toString()}</h1>
    }
    return this.props.children
  }
}
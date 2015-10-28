import React from 'react';

export default class Hello extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: props.name
    }
  }

  handleKeyUp(event) {
    this.setState({name: event.currentTarget.value})
  }

  clearInput() {
    this.setState({name: null})
  }

  renderNameString() {
    if (!this.state.name) {
      return 'Hello. Try entering your name.'
    }

    return `Hello, ${this.state.name}`
  }

  render() {
    return (
      <div>
        <h1>{this.renderNameString()}</h1>

        <input value={this.state.name} placeholder="Your name here..." onChange={this.handleKeyUp.bind(this)}></input>

        {getButton.call(this)}
      </div>
    )
  }
}

let getButton = function () {
  // Return a button if there's a name set.
  if (this.state.name) {
    return <button onClick={this.clearInput.bind(this)}>{this.props.clearButtonLabel}</button>
  }

  return null
}

Hello.defaultProps = {
  clearButtonLabel: 'Clear'
}

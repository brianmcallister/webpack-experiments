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

  render() {
    return (
      <div>
        <h1>hellooo {this.state.name}</h1>

        <input onKeyUp={this.handleKeyUp.bind(this)}></input>
      </div>
    )
  }
}

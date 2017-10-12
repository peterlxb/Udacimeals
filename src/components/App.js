import React, { Component } from 'react'
import { addRecipe } from '../actions'

class APP extends Component {
  state = {
    calendar: null
  }

  componentDidMount () {
    const { store } = this.props

    store.subscribe(() => {
      this.setState(() => ({
        calendar: store.getState()
      }))
    })
  }

  submitFood = () => {
    this.props.store.dispatch(addRecipe({
      day:'monday',
      meal:'breakfast',
      recipe: {
        label: this.input.value
      },
    }))

    this.input.value = ''
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={(input) => this.input = input}
          placeholder="Monday's Breakfast"
        />
        <button onClick={this.submitFood}>Submit</button>
        <pre>
          Mondays Breakfast: {this.state.calendar && this.state.calendar.monday.breakfast}

      </div>
    )
  }
}

export default APP

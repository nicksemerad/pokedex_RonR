import React, { Component } from 'react';
import PokeForm from './PokeForm'
import { Button } from 'semantic-ui-react';

class Pokemon extends Component {
  state = { showForm: false }

  toggleForm = () => this.setState({ showForm: !this.state.showForm })

  render() {
    const { name, type, location, level, move} = this.props
    const { showForm } = this.state
    return(
      <>
        {
          showForm ? 
          <PokeForm {...this.props} toggleForm={this.toggleForm}/>
          :
          <div>
          <h1>{name}</h1>
          <p>Type: {type}</p>
          <p>Location: {location}</p>
          <p>Level: {level}</p>
          <p>Move: {move}</p>
          <Button onClick={this.toggleForm}>Edit</Button>
        </div>
        }
      </>
    )
  }
}

export default Pokemon;
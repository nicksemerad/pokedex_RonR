import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class PokeForm extends Component {
  state = { name: '', level: 0, location: '', move: ''}

  componentDidMount = () => {
    if(this.props.id) {
      const { name, level, location, move} = this.props
      this.setState({ name, level, location, move})
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState( { [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      //update function for back and front ends
      this.props.updatePokemon(this.props.id, this.state)
      //toggle form
      this.props.toggleForm();
    } else {
      //add function from props
      this.props.addPokemon(this.state)
    }
    this.setState({ name: '', level: 0, location: '', move: ''})
  }

  render() {
    const { name, level, location, move } = this.state
    return(
      <>
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
          label='Name: '
            required
              name='name'
                value={name}
                  onChange={this.handleChange}
        />
        <Form.Input 
          label='Level: '
            required
              name='level'
                value={level}
                  onChange={this.handleChange}
        />
        <Form.Input 
          label='Location: '
            required
              name='location'
                value={location}
                  onChange={this.handleChange}
        />
        <Form.Input 
          label='Move: '
            required
              name='move'
                value={move}
                  onChange={this.handleChange}
        />
        <Form.Button>Submit</Form.Button>
      </Form>
      </>
    )
  }
}


export default PokeForm;
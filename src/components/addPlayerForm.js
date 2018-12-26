import React, { Component } from 'react';
import { Consumer } from './Context';

class AddPlayerForm extends Component {
  state = { 
    value: ''
  };

  handleValueChange = e => {
    this.setState({ value: e.target.value });
  }

  render() { 

    return ( 
      <Consumer>
        { ({ actions }) => {
          const handleSubmit = e => {
            e.preventDefault();
            actions.addPlayer(this.state.value);
            this.setState({value: ''});
          }

          return (
            <form onSubmit={handleSubmit}>
              <input 
                type="text"
                placeholder="Enter a player's name"
                onChange={this.handleValueChange}
                value={this.state.value}
              />
      
              <input 
                type="submit"
                value="Add Player"
              />
            </form>
          );
        }}
      </Consumer>
     );
  }
}
 
export default AddPlayerForm;
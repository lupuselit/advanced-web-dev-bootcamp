import React, { Component } from 'react';

class TodoForm extends Component {

  constructor(props) {
    super(props);
    this.state = {inputValue: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  handleSubmit() {
    // passing the input value to the add todo
    this.props.addTodo(this.state.inputValue);
    // clean the input
    this.setState({
      inputValue: ''
    });

  }

  render() {
    return (
      <div>
        <input 
          type="text" 
          value={this.state.inputValue}
          onChange={this.handleChange}
          placeholder="todo"
        />
        <button 
          onClick={this.handleSubmit}
        >Add Todo</button>
      </div>
    );
  }
}

export default TodoForm;
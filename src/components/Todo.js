import React, {Component} from 'react'

class Todo extends Component {
  render(){
    return(
    	// It is a pattern in React to send parts of a parent component's 
    	// state into its child component(s) as props.
      <p data-todos-index={this.props.todo._id}>
        <span>{this.props.todo.body}</span>
      </p>
    );
  }
}

export default Todo;
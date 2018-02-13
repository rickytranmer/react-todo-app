import React, {Component} from 'react'
import Todo from './Todo'

class TodoList extends Component {
  render(){
    // It is a pattern in React to send parts of a parent component's 
    // state into its child component(s) as props.
    let todoArray = this.props.todos.map((todo)=> {
      return (
        <Todo
          key={todo._id}
          todo={todo}/>
      );
    })
    return(
      <div className="todos">
        {todoArray}
      </div>
    );
  }
}

export default TodoList;
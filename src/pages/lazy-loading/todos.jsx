import React, { Component } from "react";

class Todos extends Component {
  constructor(props) {
    super(props);
    this.fetchTodo = this.fetchTodo.bind(this);
    this.state = {
      todos: [],
      dummy: "",
    };
  }

  componentDidMount() {
    this.fetchTodo();
  }

  fetchTodo() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          this.setState({
            todos: json,
          });
        }, 3000);
      });
  }

  render() {
    const { todos } = this.state;
    return !todos.length ? (
      <div>Loading Todos</div>
    ) : (
      <>
        {todos.map((todo) => {
          return <div key={todo.id}>{todo.title}</div>;
        })}
      </>
    );
  }
}

export default Todos;

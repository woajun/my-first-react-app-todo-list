import React from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: ["김치찌개 먹기"] };
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo(todo) {
    this.setState({ todos: [...this.state.todos, todo] });
  }
  render() {
    return (
      <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <TodoInput onSubmitEvent={this.addTodo} />
          {this.state.todos}
          <TodoItem></TodoItem>
          <TodoItem></TodoItem>
          <TodoItem></TodoItem>
          <TodoItem></TodoItem>
        </div>
      </div>
    );
  }
}

export default TodoBox;

import React from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

class TodoBox extends React.Component {
  key = 0;
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.finishTodo = this.finishTodo.bind(this);
  }
  addTodo(aTodo) {
    const todo = {
      content: aTodo,
      key: this.getKey(),
      finish: false,
      from: new Date(),
      to: null,
    };
    this.setState({ todos: [...this.state.todos, todo] });
  }
  removeTodo(key) {
    const filtered = this.state.todos.filter((e) => e.key !== key);
    this.setState({ todos: filtered });
  }
  finishTodo(key) {
    const mapped = this.state.todos.map((e) => {
      if (e.key === key) {
        e.finish = !e.finish;
      }
      return e;
    });
    this.setState({ todos: mapped });
  }
  getKey() {
    return this.key++;
  }
  render() {
    const todos = this.state.todos.map((e) => (
      <TodoItem
        key={e.key}
        content={e.content}
        id={e.key}
        finish={e.finish}
        onDeleteEvent={this.removeTodo}
        onSuccessEvent={this.finishTodo}
      />
    ));
    return (
      <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <TodoInput onSubmitEvent={this.addTodo} />
          {todos}
        </div>
      </div>
    );
  }
}

export default TodoBox;

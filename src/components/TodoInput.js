import React from "react";

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "apple" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ value: "" });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.value}
        <input
          type="text"
          className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
          value={this.state.value}
          onChange={this.handleChange}
        ></input>
      </form>
    );
  }
}

export default TodoInput;

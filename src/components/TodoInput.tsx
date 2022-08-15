import React from "react";

interface Props {
  onSubmitEvent:(aTodo: string)=>void,
}

interface State {
  value: string
}
class TodoInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { value: "apple" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ value: e.currentTarget.value });
  }
  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.props.onSubmitEvent(this.state.value);
    this.setState({ value: "" });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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

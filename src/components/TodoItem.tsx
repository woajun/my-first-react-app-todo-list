import React from "react";

interface Props {
  content: string,
  id: number, 
  finish: boolean,
  onDeleteEvent: (key: number)=>void,
  onSuccessEvent: (key: number)=> void,
}

interface State {

}

class TodoItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
  }
  handleDelete() {
    this.props.onDeleteEvent(this.props.id);
  }
  handleSuccess() {
    console.log(this.props.finish);
    this.props.onSuccessEvent(this.props.id);
  }
  render() {
    const divClassName =
      "mt-2 py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm";

    return (
      <div className="mt-2 py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm">
        <label className={this.props.finish ? "line-through" : ""}>
          {this.props.content}
        </label>
        <span className="float-right">
          <button onClick={this.handleSuccess}>완료</button>
          <button className="ml-3" onClick={this.handleDelete}>
            삭제
          </button>
        </span>
      </div>
    );
  }
}

export default TodoItem;

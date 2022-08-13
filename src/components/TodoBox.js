import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

function TodoBox() {
  return (
    <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <div className="p-4 sm:p-7">
        <TodoInput></TodoInput>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
      </div>
    </div>
  );
}

export default TodoBox;

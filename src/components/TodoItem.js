function TodoItem() {
  return (
    <div className="mt-2 py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm">
      <label>조깅하기</label>
      <span className="float-right">
        <button>완료</button>
        <button className="ml-3">삭제</button>
      </span>
    </div>
  );
}

export default TodoItem;

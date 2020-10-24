import React, { useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      task: "Walk the dog",
      id: 1,
      isCompleted: false,
      created: "a few seconds ago",
    },
    {
      task: "Buy Food",
      id: 2,
      isCompleted: false,
      created: "a few seconds ago",
    },
    {
      task: "Write som code",
      id: 3,
      isCompleted: false,
      created: "a few seconds ago",
    },
  ]);

  return (
    <div className="todoList">
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoList;

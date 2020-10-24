import React from "react";
import Button from "../Button/Button";

const Todo = ({ task, created }) => {
  return (
    <div className="todo">
      <h2 className="todo__header">{task}</h2>
      <h3 className="todo__timestamp">{created}</h3>
      <div className="todo__buttons">
        <Button>Edit</Button>
        <Button>Delete</Button>
        <Button>Completed</Button>
      </div>
    </div>
  );
};

export default Todo;

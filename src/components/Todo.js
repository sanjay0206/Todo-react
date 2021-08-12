import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  // delete todo
  const deleteHandler = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
    console.log(todo);
  };

  // completed task
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="completed-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fa fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;

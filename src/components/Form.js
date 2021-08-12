import React from "react";

const Form = ({ setInputText, inputText, setTodos, todos }) => {
  // Here I cn write javascript code and functions
  const inputTextHandler = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
    console.log("clicked");
  };

  return (
    <div>
      <form>
        <input
          value={inputText}
          // everytime the onchange is uses inputHandler function is called
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
          placeholder="add todo"
        />
        <button
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          <i className="fa  fa-plus-square"></i>
        </button>
      </form>
    </div>
  );
};

export default Form;

import React, { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItem";

const Todo = () => {
  let inputRef = useRef();
  const [todoList, setTodoList] = useState(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : []
  );

  //take input from textfild
  const add = () => {
    const inputText = inputRef.current.value.trim();
    // console.log(inputText);
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  //delete task list
  const deleteItem = (id) => {
    setTodoList((prev) => {
      return prev.filter((todo) => id !== todo.id);
    });
  };

  //mark down complete task list
  const toggle = (id) => {
    setTodoList((prevTask) => {
      return prevTask.map((task) => {
        if (task.id === id) {
          return { ...task, isComplete: !task.isComplete };
        }
        return task;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="bg-white place-self-center w-8/12 max-w-sm flex flex-col p-7 min-h-[450px] rounded-xl">
      {/* ---------title-----------  */}
      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={todo_icon} alt="" />
        <h1 className="text-3xl font-semibold">To-DO List</h1>
      </div>
      {/* --------input box---------  */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-400"
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          ADD +
        </button>
      </div>
      {/* ------------todo list-------------  */}
      <div>
        {todoList.map((item, index) => {
          return (
            <TodoItems
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteItem={deleteItem}
              toggle={toggle}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;

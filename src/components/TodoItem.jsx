import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_item from "../assets/delete.png";

// eslint-disable-next-line react/prop-types
const TodoItems = ({ text, id, isComplete, deleteItem, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img src={isComplete ? tick : not_tick} alt="" className="w-7" />
        <p
          className={`text-slate-700 ml-4 text-[17px] decoration-rose-500 ${
            isComplete ? "underline decoration-2 through" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <img
        onClick={() => {
          deleteItem(id);
        }}
        src={delete_item}
        alt=""
        className="w-3.5 cursor-pointer"
      />
    </div>
  );
};

export default TodoItems;

import React from "react";
import { MdDeleteOutline } from "react-icons/md";
const TodoList = ({ todos, deleteTodo }) => {
  return (
    <>
      <div>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.name}{" "}
              <span onClick={() => deleteTodo(todo.id)}>
                <MdDeleteOutline />
              </span>
            </li>
          );
        })}
      </div>
    </>
  );
};
export default TodoList;

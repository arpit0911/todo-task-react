import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { ListGroup, ListGroupItem } from "reactstrap";
const TodoList = ({ todos, deleteTodo }) => {
  return (
    <ListGroup className="mt-4">
      {todos.map((todo) => {
        return (
          <ListGroupItem
            color="secondary"
            className="list-item "
            tag={"h4"}
            key={todo.id}
          >
            {todo.name}{" "}
            <span className="delete-btn" onClick={() => deleteTodo(todo.id)}>
              <MdDeleteOutline />
            </span>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};
export default TodoList;

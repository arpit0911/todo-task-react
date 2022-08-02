import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddTask = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(task);
    if (!task) {
      alert("Please add task ");
      return;
    }
    const singleTask = {
      id: uuidv4(),
      name: task,
    };
    // setTask(event.target.value);
    addTodo(singleTask);
    setTask("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter you task"
          type="text"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </>
  );
};
export default AddTask;

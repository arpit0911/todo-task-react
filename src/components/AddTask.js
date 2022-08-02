import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, Input, Form } from "reactstrap";

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
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Enter you task"
          type="text"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
        <Button className="mt-2" color="primary" type="submit">
          Add Task
        </Button>
      </Form>
    </>
  );
};
export default AddTask;

import "./App.css";
import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";
import { useEffect, useState } from "react";
import { Container, Card } from "reactstrap";
function App() {
  const [todos, setTodo] = useState([]);
  //**** adding new task to the list
  const addTodo = (singleTask) => {
    // console.log(singleTask);
    const updatedTodos = [...todos, singleTask];
    setTodo((prevState) => [...prevState, singleTask]);
    localStorage.setItem("todoList", JSON.stringify(updatedTodos));
  };

  // ***** deleting a task from the list
  const deleteTodo = (id) => {
    // console.log("delete is called in the root ", id);
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodo(updatedTodos);
    localStorage.setItem("todoList", JSON.stringify(updatedTodos));
  };

  // ***** loading the list on initial load
  useEffect(() => {
    const allTodos = localStorage.getItem("todoList");
    if (allTodos) {
      setTodo(JSON.parse(allTodos));
    }
  }, []);
  return (
    <div className="App">
      <AddTask addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;

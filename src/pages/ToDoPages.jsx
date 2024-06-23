import { useState } from "react";
import { v4 } from "uuid";
import ToDoForm from "../ToDoForm";
import ToDo from "../ToDo";

function ToDoPage() {
  const [todos, setToDos] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: v4(),
        task: userInput,
        complete: false,
      };
      setToDos([...todos, newItem]);
    }
  };
  const removeTask = (id) => {
    setToDos([...todos.filter((todo) => todo.id !== id)]);
  };

  const handleToggle = (id) => {
    setToDos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };

  return (
    <div className="App">
      <header>
        <h1>Список задач: {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
          />
        );
      })}
    </div>
  );
}

export default ToDoPage;

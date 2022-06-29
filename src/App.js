import "./App.css";
import { useEffect, useState } from "react";
import ToDoItem from "./ToDoItem";


function App() {
  // [data, setData] = useState(initialData)
  const [todos, settodos] = useState([]);
  const [textValue, setTextValue] = useState("");

  const refreshToDos = () => {
    fetch("http://localhost:3000/todos/")
      .then((response) => response.json())
      .then((data) => settodos(data));
  };

  const addToDO = (content) => {
    if (!content) return;

    fetch(`http://localhost:3000/todos/create`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content,
      }),
    }).then(() => {
      refreshToDos();
      setTextValue("");
    });
  };

  const deleteToDo = (id) => {
    fetch(`http://localhost:3000/todos/${id}/delete`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => refreshToDos());
  };

  const changeCompleted = (id, value) => {
    fetch(`http://localhost:3000/todos/${id}/update`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isDone: value,
      }),
    }).then(() => refreshToDos());
  };

  // use once if second argument is empty []
  useEffect(refreshToDos, []);

  return (
    <div className="App">
      <h1>Todo App</h1>

      <div className="ToDoContainer">
        <ul>
          {todos.map((todo) => (
            <ToDoItem
              todo={todo}
              onDeleteTodo={deleteToDo}
              onChangeCompleted={changeCompleted}
            />
          ))}
        </ul>
        <div className="Inputs">
          <input
            value={textValue}
            onChange={(e) => setTextValue(e.currentTarget.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addToDO(textValue);
              }
            }}
          ></input>
          <button className="Button" onClick={() => addToDO(textValue)}>
            add
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

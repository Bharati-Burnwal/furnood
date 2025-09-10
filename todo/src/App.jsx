import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([]);

  function addTodo() {
    if (inputValue.trim() === "") {
      setInputValue("");
      return;
    }
    setTodo(inputValue);
    setInputValue("");
  }

function deleteTodo(){
  setTodo ("")
}

  return (
    <>
      <input
        type="text"
        placeholder="enter anything"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>Add</button> 

      <ul>
        <li>{todo}
          <button onClick={deleteTodo}>DEL</button>
        </li>
      </ul>
    </>
  );
}

export default App;

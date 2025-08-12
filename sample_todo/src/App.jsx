import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoInputFile from "./Components/TodoInputFile";
import Heading from "./Components/Heading";
import TodoItemSepration from "./Components/TodoItemSepration";
import WelcomeMessage from "./Components/WelcomeMessage";

function App() {
  let [todoItemsArr, setTodoItemsArr] = useState([]);

  /*  const handleNewItem = (todoName, todoDate) => {
    const newItem = { id: Date.now(), name: todoName, dueDate: todoDate };
    console.log(newItem);
    setTodoItemsArr([...todoItemsArr, newItem]);
  }; */

  const handleNewItem = (todoName, todoDate) => {
    setTodoItemsArr((currValue) => [
      ...currValue,
      { id: Date.now(), name: todoName, dueDate: todoDate },
    ]);
  };

  const handleOnDelete = (todoid) => {
    setTodoItemsArr(todoItemsArr.filter((items) => items.id != todoid));
  };
  return (
    <center>
      <Heading />
      <TodoInputFile addnewItem={handleNewItem} />
      {todoItemsArr.length === 0 && <WelcomeMessage />}
      <TodoItemSepration
        todoItemlst={todoItemsArr}
        OnDeleteClick={handleOnDelete}
      />
    </center>
  );
}

export default App;

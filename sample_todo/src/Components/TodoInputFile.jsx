// import { useState } from "react";

// function TodoInputFile({ addnewItem }) {
//   let [todoName, setTodoName] = useState("");
//   let [todoDate, setTodoDate] = useState("");

//   const handleName = (event) => {
//     console.log(event.target.value);
//     setTodoName(event.target.value);
//   };
//   const handleDate = (event) => {
//     console.log(event.target.value);
//     setTodoDate(event.target.value);
//   };

//   const handleAddNewItem = (event) => {
//     event.preventDefault();
//     addnewItem(todoName, todoDate);
//     setTodoName("");
//     setTodoDate("");
//   };

//   return (
//     <div>
//       <form className="row us-row" onSubmit={handleAddNewItem}>
//         <div className="col-6">
//           <input
//             type="text"
//             placeholder="First name"
//             onChange={handleName}
//             value={todoName}
//           />
//         </div>

//         <div className="col-4">
//           <input type="Date" onChange={handleDate} value={todoDate} />
//         </div>

//         <div className="col-1">
//           <button type="submit" className="btn btn-success us-button">
//             ADD
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default TodoInputFile;

import { useRef } from "react";

function TodoInputFile({ addnewItem }) {
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddNewItem = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    addnewItem(todoName, todoDate);
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
  };

  return (
    <div>
      <form className="row us-row" onSubmit={handleAddNewItem}>
        <div className="col-6">
          <input type="text" placeholder="First name" ref={todoNameElement} />
        </div>

        <div className="col-4">
          <input type="Date" ref={todoDateElement} />
        </div>

        <div className="col-1">
          <button type="submit" className="btn btn-success us-button">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoInputFile;

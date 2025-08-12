import ItemList from "./ItemList";

let TodoItemSepration = ({ todoItemlst, OnDeleteClick }) => {
  return (
    <div>
      {todoItemlst.map((item) => (
        <ItemList
          key={item.id}
          todoid={item.id}
          todoName={item.name}
          todoDate={item.dueDate}
          OnDeleteClick={OnDeleteClick}
        />
      ))}
    </div>
  );
};
export default TodoItemSepration;

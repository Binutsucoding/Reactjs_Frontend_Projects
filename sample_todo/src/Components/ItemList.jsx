function ItemList({ todoid, todoName, todoDate, OnDeleteClick }) {
  return (
    <div className="Items_container">
      <div className="row us-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            className="btn btn-danger"
            onClick={() => OnDeleteClick(todoid)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default ItemList;

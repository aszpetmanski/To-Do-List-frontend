// const renderToDo = (todo) => {
//     return (
//       <li key={todo.id}>
//         <div className="row">
//           <span
//             style={{
//               textDecoration: todo.isDone ? "line-through" : "initial",
//             }}
//           >
//             {todo.content}
//           </span>
//           <button
//             className="Button"
//             onClick={() => changeCompleted(todo.id, !todo.isDone)}
//           >
//             {todo.isDone ? "undo" : "complete"}
//           </button>
//           <button className="Button" onClick={() => deleteToDo(todo.id)}>
//             delete
//           </button>
//         </div>
//       </li>
//     );
//   };

function ToDoItem(props) {
  const { todo, rzeczy, onChangeCompleted, onDeleteTodo } = props;
  console.log({ todo, rzeczy });
  return (
    <li key={todo.id}>
      <div className="row">
        <span
          style={{
            textDecoration: todo.isDone ? "line-through" : "initial",
          }}
        >
          {todo.content}
        </span>
        <button
          className="Button"
          onClick={() => onChangeCompleted(todo.id, !todo.isDone)}
        >
          {todo.isDone ? "undo" : "complete"}
        </button>
        <button className="Button" onClick={() => onDeleteTodo(todo.id)}>
          delete
        </button>
      </div>
    </li>
  );
}

export default ToDoItem;

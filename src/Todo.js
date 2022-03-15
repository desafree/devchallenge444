const Todo = ({todo,index,toggleTodo,removeTodo}) => {
    return ( 
        <div className="todo-container" key={index}>
            {(todo.done)? <input type="checkbox" name="" id="" index={index} defaultChecked onChange={()=>{toggleTodo(index)}}/> : <input type="checkbox" name="" index={index} id="" onChange={()=>{toggleTodo(index)}}/>}
            <p>{todo.name}</p> 
            {(removeTodo)? <button className="remove" onClick={()=>{removeTodo(index)}}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#BDBDBD"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg></button> : <></>}
        </div>
     );
}
 
export default Todo;
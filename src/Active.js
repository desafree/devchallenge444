import Todo from "./Todo";

const Active = ({todos,addTodo,toggleTodo}) => {

    return ( 
        
            <div className="container-box">
                <form action="#" onSubmit={(e)=>{
                    e.preventDefault()
                    const form = document.querySelector('form')
                    addTodo(form.name.value)
                    form.reset()
                }}>
                    <div className="add">
                        <input type="text" name="name" placeholder="add details"/>
                        <button>Add</button>
                    </div>
                </form>
                {todos.map((todo,index)=>{
                    if(!todo.done) {
                        return <Todo todo={todo} index={index} toggleTodo={toggleTodo} key={index}></Todo>
                    }
                    return null
                })}
            </div>
        
     );
}
 
export default Active;
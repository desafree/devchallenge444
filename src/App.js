import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Home";
import Active from "./Active";
import Completed from "./Completed";
import Navbar from "./Navbar";




function App() {

  const [todos,setTodos] = useState([{name:'do coding challenge', done: true},{name:'do coding challenge', done: true},{name:'do coding challenge', done: false}])

  console.table(todos)

  const addTodo = (name)=>{
    const todo = {name:name, done:false}
    const newTodos = [...todos]
    newTodos.push(todo)
    console.log(newTodos)
    setTodos(newTodos)
  }

  const toggleTodo = (index)=>{
    const newTodos = [...todos]
    newTodos[index].done = !newTodos[index].done
    setTodos(newTodos)
    console.log(todos)
  }

  console.table(todos)

  const removeTodo = (index)=>{
    const newTodos = [...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)
    console.table(todos)
  }

  const deleteAll = ()=>{
    const newTodos = todos.filter((todo)=>{
      if(!todo.done) {
        return true
      }
    })

    setTodos(newTodos)
  }


  


  return (
    <BrowserRouter>
    <div className="container">
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home todos={todos} addTodo={addTodo} toggleTodo={toggleTodo}/>}></Route>
          <Route path='/active' element={<Active todos={todos} addTodo={addTodo} toggleTodo={toggleTodo}></Active>}></Route>
          <Route path='/completed' element={<Completed todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} deleteAll={deleteAll}></Completed>}></Route>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

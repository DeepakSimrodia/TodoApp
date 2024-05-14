import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import { addToDo, deleteTodo, getAllToDo, updateTodo } from "./utils/handleapi";

function App() {
  const [toDo,setToDo]=useState([])
  useEffect(()=>{
    getAllToDo(setToDo)
  },[])
  const [isUpdating,setIsUpdating]=useState(false)
  const [text,setText]=useState("")
  const [toDoId,settoDoId]=useState("")
  const updateMode=(_id,text)=>{
    setIsUpdating(true)
    setText(text)
    settoDoId(_id)
  }
  return (
    <div className="App">
      <div className="container">
        <h1>
          ToDo App
        </h1>
      <div className="top">
        <input type="text" placeholder="Add todos..." value={text} onChange={(e)=>setText(e.target.value)}></input>
        <div className="add"  onClick={isUpdating ? ()=> updateTodo(toDoId,text,settoDoId,setText,setIsUpdating) :()=>addToDo(text,setText,setToDo)}>{isUpdating? "Update" :"Add"}</div>
      </div>
      <div className="list">
    {toDo.map((item)=><Todo key={item._id} text={item.text} updateMode={()=>updateMode(item._id,item.text)} deleteTodo={()=>deleteTodo(item._id,setToDo)}></Todo>)}
      
      </div>
      </div>
    </div>
  );
}

export default App;


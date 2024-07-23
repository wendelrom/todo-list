import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    return setInput(event.target.value);
  }

  const addTodo = () => {
    return (
      <>
        {setTodo([...todo, input])}
        {setInput('')}
      </>
    )
  }

  const deleteTodo = (i) => {
    return (
      <>
        {todo.splice(i, 1)}
        {setTodo([...todo])}
      </>
    )
  }

  const editTodo = (i) => {
    return (
      <>
        {todo}
      </>
    )
  }
  
  const submitForm = (e) => {
    e.preventDefault()
    console.log(todo)
  }

  return (
    <div className="p-8 border-2 rounded-xl shadow-lg bg-slate-50">
      <form action="" onSubmit={submitForm}>
        <input 
          className="border-2 p-1 rounded-md mx-2"
          type="text" 
          value={input}
          onChange={handleChange}
        />
        <button className="border-2 py-1 px-4 bg-slate-800 text-neutral-100" onClick={addTodo}>Add</button>
      </form>
      <div>
        <ul className="py-4">
        {todo && todo.map((todo, i) => (
          <li 
            key={i}
            className="list-none text-gray-700 ms-4 my-4 flex justify-between"
          >
            {todo}
            <div>
            <button
              className="border border-red-800 bg-red-500 text-neutral-100 py-1 px-3 rounded-lg"
              onClick={() => deleteTodo(i)}
            >
              Delete
            </button>
            </div>
          </li>
        ))}
        </ul>
      </div>
    </div>
  )
}

export default Todo
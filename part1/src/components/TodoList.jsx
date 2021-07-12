import { useState } from "react"

const TodoList = () => {
  const [todos, setTodos] = useState([
    { task: 'Wash cloth', isDone: true }
  ])
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTodo.trim()) return

    setTodos(todos.concat({
      task: newTodo.trim(),
      isDone: false
    }))
    setNewTodo('')
  }

  const toggleTodo = (index) => 
    setTodos(todos.map((todo, todoIndex) => {
      if (todoIndex === index) todo.isDone = !todo.isDone
      
      return todo
    }))

  return (
    <div>
      <h1>My Todo List</h1>
      <p>
        <pre>{JSON.stringify(todos, null, 2)}</pre>
      </p>
      <ul style={{paddingLeft: 0}}>
        {todos.map((todo, todoIndex) => (
          <li
            onClick={() => toggleTodo(todoIndex)}
            key={`todo-${todoIndex}`}
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <input checked={todo.isDone} type="checkbox" style={{marginRight: '0.5rem'}} />
            <span style={{color: todo.isDone ? 'green' : 'black'}}>{todo.task}</span>
            ({todo.isDone})
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Todo"
          required
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
        />
        <button>Add todo</button>
      </form>
    </div>
  )
}

export default TodoList

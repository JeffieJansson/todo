import styled from 'styled-components';
import { useTodoStore } from '../store/todoStore.jsx'

export const todoList = () => {
  const todos = useTodoStore ((state) => state.todos)


  return (
    <div>
      <ul>
    {todos.map((todo) => (
      <li key={todo.id}>
        {todo.text}
      </li>
    ))}
    </ul>
    </div>
  )
}

import { useTodoStore } from '../store/todoStore.jsx'
import { TodoItem } from './todoItem.jsx';

export const TodoList = () => {
  const todos = useTodoStore ((state) => state.todos)


  return (
    <>
    {todos
      .map((todo) => (
    <TodoItem key={todo.id} todo={todo} />
    ))}
    </>
  )
}

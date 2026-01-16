import { useTodoStore } from '../store/todoStore.jsx'
import { TodoItem } from './todoItem.jsx';
import { EmptyState } from './emptyState.jsx';

export const TodoList = () => {
  const todos = useTodoStore ((state) => state.todos)


   if (todos.length === 0) {
    return <EmptyState />
  }

  return (
    <>
    {todos
      .map((todo) => (
    <TodoItem key={todo.id} todo={todo} />
    ))}
    </>
  )
}

import { useTodoStore } from "../store/todoStore";

export const TodoCount = () => {
  const todos = useTodoStore ((state) => state.todos);

  const completedTodos = todos.filter(todo => todo.completed).length;
  const unCompletedTodos = todos.filter(todo => !todo.completed).length;
  return (
    <>
      <p>Completed todos: {completedTodos}</p>
      <p>Uncompleted todos: {unCompletedTodos}</p>
    </>
  )
}
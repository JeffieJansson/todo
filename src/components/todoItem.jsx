import { useTodoStore } from "../store/todoStore"; 
import styled from "styled-components";

export const TodoItem = ({ todo }) => {
  const removeTodo = useTodoStore ((state) => state.removeTodo)
  const toggleTodo = useTodoStore ((state) => state.toggleTodo)

const ItemContainer = styled.div`
  display: flex;
  gap: 10px;
  border-radius: 8px;
  padding: 10px;
  padding : 10px;
  justify-content: space-between;
  `;
  const RemoveButton = styled.button`
  background-color: #d3d8f0;
  color: #000;
  border-radius: 8px;
  `;
return (
  <ItemContainer>
    <input 
      type="checkbox"
      checked={todo.completed}
      onChange={() => toggleTodo(todo.id)}
      />
      <span>{todo.text}</span>
    <RemoveButton onClick={() => removeTodo(todo.id)}>Remove</RemoveButton>
  </ItemContainer>
)
}
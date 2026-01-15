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

  const DeleteIcon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;

     &:hover {
      transform: scale(1.1);
    }
  `;

return (
  <ItemContainer>
    <input 
      type="checkbox"
      checked={todo.completed}
      onChange={() => toggleTodo(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <DeleteIcon 
        src="/delete.png" 
        alt="Delete" 
        onClick={() => removeTodo(todo.id)}
      />
  </ItemContainer>
)
}
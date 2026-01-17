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
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    padding: 8px;
    gap: 8px;
  }

  @media (min-width: 768px) {
    padding: 12px;
    gap: 12px;
  }
  `;

  const DeleteIcon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 480px) {
      width: 20px;
      height: 20px;
    }

    @media (min-width: 768px) {
      width: 28px;
      height: 28px;
    }
  `;

return (
  <ItemContainer>
    <input 
      type="checkbox"
      id={`todo-${todo.id}`}
      aria-label={todo.text || 'Todo item'}
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
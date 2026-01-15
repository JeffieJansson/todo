import { useTodoStore } from "../store/todoStore";
import styled from "styled-components";

const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

const CounterTodos = styled.div`
  padding: 10px;  
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  background-color: rgba(255, 255, 255, 0.5);
`;

  const CounterText = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  `;


export const TodoCount = () => {
  const todos = useTodoStore ((state) => state.todos);

  const completedTodos = todos.filter(todo => todo.completed).length;
  const unCompletedTodos = todos.filter(todo => !todo.completed).length;
  return (
    <CounterContainer>
    <CounterTodos>
      <CounterText> Completed todos: {completedTodos} </CounterText>
      </CounterTodos>

      <CounterTodos>
      <CounterText> Uncompleted todos: {unCompletedTodos} </CounterText>
      </CounterTodos>

  </CounterContainer>
  )
}
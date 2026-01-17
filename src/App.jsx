import styled from 'styled-components';
import { AddTodoForm } from './components/addTodoForm.jsx';
import { TodoList } from './components/todoList.jsx';
import { TodoCount } from './components/todoCounter.jsx';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Aboreto', cursive;
  background: linear-gradient(45deg, #dd88ff, #ffddcc);
`;

const TodoContent = styled.main`
  background-color: rgba(255, 255, 255, 0.5);
  padding: 30px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const Heading = styled.header`
  text-align: center;
  margin-bottom: 30px;
  
  h1 {
    margin: 0;
    color: #000000;
    font-size: 18px;
  }
  
  p {
    margin: 10px 0 0 0;
    color: #000000;
  }
`;

export default function App() {
  return (
    <AppContainer>
      <TodoContent>
          <Heading>
            <h1>Todo App</h1>
          </Heading>
          <AddTodoForm />
         <TodoList />
        <TodoCount/>
      </TodoContent>
    </AppContainer>
  );
}
import styled from 'styled-components';
import { useTodoStore } from '../store/todoStore.jsx'
import { useState } from 'react'

const FormContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px;
  `;

const Form = styled.form`
  display: flex;
  gap: 10px;
  width: 100%;
  `;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 2px solid #948f8f;
  background: transparent;
  outline: none;
  font-size: 16px;
  gap: 10px;
  border-width: 0 0 2px 0;

  &:focus {
    border-color: #9575CD;
  }
  `;
  
 const SubmitButton = styled.button`
  background-color: rgba(255, 255, 255, 0.5);
  color: #000;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0;

   &:hover {
    transform: scale(1.05);
    cursor: pointer;
    transition: transform 0.2s;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    }
  `;
  
export const AddTodoForm = () => {
  const [text, setText] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if(!text.trim()) return;
    addTodo(text);
    setText("");
  }
  return (
    <>

<FormContainer>
    <Form onSubmit={handleAddTodo}>
      <Input 
      type="text" 
      placeholder="Add a new todo..." 
      aria-label="Add a new todo"
      value={text} 
      onChange={(e) => setText(e.target.value)} 
      />
   <SubmitButton type="submit">Add Todo</SubmitButton>
    </Form>
</FormContainer>
   </>
  )
}


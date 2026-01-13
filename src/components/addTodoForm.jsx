import styled from 'styled-components';
import { useTodoStore } from '../store/todoStore.jsx'
import { useState } from 'react'


const FormContainer = styled.div`
  display: flex;
  gap: 10px;
  border-radius: 8px;
  padding: 10px;
  padding : 20px;
  `;

const Input = styled.input`
flex: 1;
  padding: 10px;
  border: 2px solid #948f8f;
  border-radius: 5px;
  font-size: 16px;
  gap: 10px;
  `;
  
 const SubmitButton = styled.button`
  background-color: #637be6;
  color: #000;
  border-radius: 8px;
  `;
  
export const AddTodoForm = () => {
  const [text, setText] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!text.trim()) return;
    addTodo(text);
    setText("");
  }
  return (

<FormContainer>
    <form onSubmit={handleSubmit}>
      <Input type="text" placeholder="Add a new todo..." value={text} onChange={(e) => setText(e.target.value)} />

         <SubmitButton type="submit">Add Todo</SubmitButton>
    
    </form>
</FormContainer>
  )
}


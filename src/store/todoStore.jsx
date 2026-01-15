import { create } from 'zustand';

export const useTodoStore = create((set) => ({
  todos: [
    { id: 1, text: "Go for a Walk", completed: false },
    { id: 2, text: "Drink Coffee", completed: false },
  ],

  addTodo: (text) => set((state) => ({
    todos: [...state.todos, { id: Date.now(), text, completed: false }]})),

  removeTodo: (id) => set((state) => ({
    todos: state.todos.filter(todo => todo.id !== id)})),
    
  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)}))


}));
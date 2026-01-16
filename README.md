# Todo App – Global State Management with Zustand

This project is a Todo application built with React and Zustand.  
The purpose of the project is to demonstrate an understanding of **global state management**, clean code structure, accessibility, and responsive design without using prop drilling.


## Project Goals

- Understand and apply global state management
- Use Zustand instead of React Context or prop drilling
- Structure the project in a clear and maintainable way

## Project Requirements

The application fulfills the following requirements:

- Global state is managed using **Zustand**. No prop drilling
- The app can:
  - List all tasks - completed and uncompleted
  - Add tasks and delete tasks
  - Be able to mark an uncompleted task as complete (and change it back to uncompleted)
  - A task counter is displayed (all tasks or uncompleted tasks)
- A friendly **empty state** is shown when there are no tasks
- The app is responsive from **320px up to 1600px**
- Accessibility guidelines are followed:
  - You should have a score of at least 95 in Lighthouse
  - All images should have alt attributes and proper sizes
  - All contrasts should be OK
  - The app aims for a **Lighthouse score of at least 95**
- Clean code principles are followed throughout the project

---

## Project design color inspo
- https://www.shutterstock.com/sv/search/purple-%26-peach-gradient?dd_referrer=https%3A%2F%2Fwww.google.com%2F




# Project Structure & Responsibilities

This part describes the file structure of the Todo application and explains the responsibility of each file and component as a good starting point but also to make it easier to understand and follow the code.


## Folder Structure
```
src/
├─ components/
│  ├─ AddTodoForm.jsx
│  ├─ TodoList.jsx
│  ├─ TodoItem.jsx
│  └─ EmptyState.jsx
│
├─ store/
│  └─ todoStore.jsx
│
├─ App.jsx
├─ main.jsx
└─ index.css
```
---


## Store : store/todoStore.jsx
**Responsibility:  Global state management using Zustand.**

**This file contains:**
- The global todos array
- All logic for modifying todos

**Functions included:**
- addTodo(text) – adds a new task
- removeTodo(id) – removes a task
- toggleTodo(id) – toggles completed/uncompleted state

---

## Components: components/AddTodoForm.jsx
**Responsibility: Add new todos.**

- Contains the form and input field
- Uses local state for input value
- Calls addTodo from the Zustand store

---

## Components: components/TodoList.jsx
**Responsibility: Display the list of todos or an empty state.**

- Retrieves todos from the store

**Decides what to render:**

- If the list is empty → renders EmptyState
- If not → renders a list of TodoItem components

---

## Components: components/TodoItem.jsx
**Responsibility: Display a single todo item.**

- Receives one todo as a prop

**Displays:**

- Task text
- Checkbox for completed state
- Button to remove task
- Calls toggleTodo(id) and removeTodo(id) from the store

---

## Components: components/EmptyState.jsx
**Responsibility: Improve UX when there are no todos.**

- Displays a message and illustration
- Provides a friendly and accessible empty state

---

## Src: App.jsx
**Responsibility: Application layout and composition.**
- Renders the main structure of the app

**Combines:**
- AddTodoForm
- TodoList
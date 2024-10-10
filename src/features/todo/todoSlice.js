import { createSlice, nanoid } from '@reduxjs/toolkit';

const loadTodos = () => {
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
};

const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
};

const initialState = {
    todos: loadTodos(),
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            };
            state.todos.push(todo);
            saveTodos(state.todos); 
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            saveTodos(state.todos); 
        },
        editTodo: (state, action) => {
            const { id, text } = action.payload;
            const existingTodo = state.todos.find((todo) => todo.id === id);
            if (existingTodo) {
                existingTodo.text = text;
                saveTodos(state.todos); 
            }
        },
    },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;

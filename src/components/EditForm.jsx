import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo } from '../features/todo/todoSlice';

function EditTodoForm({ todo, onCancel }) {
    const [input, setInput] = useState(todo.text);
    const dispatch = useDispatch();

    useEffect(() => {
        setInput(todo.text);
    }, [todo.text]);

    const handleEdit = (e) => {
        e.preventDefault();
        
            dispatch(editTodo({ id: todo.id, text: input }));
            onCancel(); 
        
    };

    return (
        <form onSubmit={handleEdit} className="mt-4 flex">
            <input
                type="text"
                className="bg-gray-800 text-gray-100 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 px-3 py-1"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="bg-indigo-500 text-white py-1 px-4 rounded ml-2 hover:bg-indigo-600"
            >
                Edit
            </button>
            <button
                type="button"
                onClick={onCancel}
                className="bg-gray-500 text-white py-1 px-4 rounded ml-2 hover:bg-gray-600"
            >
                Cancel
            </button>
        </form>
    );
}

export default EditTodoForm;

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';
import EditTodoForm from './EditForm';

function Todos() {
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();
    const [editingId, setEditingId] = useState(null);

    const handleEditClick = (id) => {
        setEditingId(id);
    };

    const handleCancelEdit = () => {
        setEditingId(null);
    };

    return (
        <div>
            <h2 className="text-2xl text-gray-300 text-center mt-2"> View Todos</h2>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li key={todo.id} className="flex justify-between items-center bg-gray-700 px-2 rounded p-4 mt-2">
                        {editingId === todo.id ? (
                            <EditTodoForm todo={todo} onCancel={handleCancelEdit} />
                        ) : (
                            <>
                                <span className="text-gray-100">{todo.text}</span>
                                <div>
                                    <button
                                        onClick={() => handleEditClick(todo.id)}
                                        className="bg-blue-500 text-white py-1 px-3 rounded mr-2 hover:bg-blue-600"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => dispatch(removeTodo(todo.id))}
                                        className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;

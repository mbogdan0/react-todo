import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {ADD_TODO} from "../../redux/actionTypes";

import "./AddTodo.css";

const AddTodo = () => {

    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        dispatch({
            type: ADD_TODO,
            payload: {
                id: Date.now(),
                content: value
            }
        });
        setValue('');
    };

    return (
        <div className="add-todo">
            <input
                type="text"
                placeholder="Добавить..."
                onChange={e => setValue(e.target.value)}
                value={value}
            />
            <button onClick={handleAddTodo}>
                Add
            </button>
        </div>
    );
};


export default AddTodo;

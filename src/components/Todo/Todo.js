import React from "react";
import { useDispatch } from "react-redux";
import {TOGGLE_TODO} from "../../redux/actionTypes";
import cx from "classnames";

import "./Todo.css";
import TodoDelete from "./TodoDelete/TodoDelete";

const Todo = ({ todo }) => {

    const {completed, content, id} = todo;

    const dispatch = useDispatch();
    const handleClick = () => dispatch({ payload: { id }, type: TOGGLE_TODO });


    const completedMark = (completed ? "👌" : "👋") + " ";
    return (
        <li className="todo-item">
            {completedMark}
            <span className={cx(
                "todo-item-text",
                completed && "todo-item-completed"
            )} onClick={handleClick}>
                {content}
            </span>
            {" "}<TodoDelete todoId={id} />
        </li>
    );
};

export default Todo;

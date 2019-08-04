import React from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";
import TodoDelete from "./TodoDelete/TodoDelete";
import {toggleTodo} from "../../redux/actions";

import "./Todo.css";

const Todo = ({ todo }) => {

    const {completed, content, id} = todo;

    const dispatch = useDispatch();
    const handleClick = () => dispatch(toggleTodo(id));

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

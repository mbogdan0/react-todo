import React, {Fragment} from "react";
import { useSelector } from "react-redux";
import Todo from "../Todo/Todo";
import {getFilteredTodos} from "../../redux/selectors";
import "./TodoList.css";

const TodoList = () => {
    const todos = useSelector(getFilteredTodos);

    const hasTodos = todos && todos.length > 0;
    const todoList = hasTodos && todos.map(todo => <Todo key={todo.id} todo={todo} />);

    return (<Fragment>{hasTodos ?
        <ul className="todo-list">
            {todoList}
        </ul> : <div className="empty-list">Empty list</div>
    }</Fragment>);
};

export default TodoList;

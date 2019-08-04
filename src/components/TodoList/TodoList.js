import React, {Fragment, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import Todo from "../Todo/Todo";
import {getFilteredTodos, getStateTodos} from "../../redux/selectors";

import "./TodoList.css";
import {fetchTodos} from "../../services/todo.service";

const TodoList = () => {
    const todos = useSelector(getFilteredTodos);
    const {isLoading} = useSelector(getStateTodos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, []);



    const hasTodos = todos && todos.length > 0;
    const todoList = hasTodos && todos.map(todo => <Todo key={todo.id} todo={todo} />);

    return (<Fragment>{
        isLoading ? <div className="empty-list">Loading...</div> :
            (hasTodos ?
                <ul className="todo-list">{todoList}</ul>
                : <div className="empty-list">Empty list</div>
            )
    }</Fragment>);
};

export default TodoList;

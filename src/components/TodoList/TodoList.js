import React from "react";
import { connect } from "react-redux";
import Todo from "../Todo/Todo";
import {getFilteredTodos} from "../../redux/selectors";
import "./TodoList.css";


const TodoList = ({ todos }) => (
    <ul className="todo-list">
        {todos && todos.length
            ? todos.map((todo) => {
                return <Todo key={`todo-${todo.id}`} todo={todo} />;
            })
            : "No todos, yay!"}
    </ul>
);


const mapStateToProps = state => {
    const todos = getFilteredTodos(state);
    return { todos };
};

export default connect(mapStateToProps)(TodoList);

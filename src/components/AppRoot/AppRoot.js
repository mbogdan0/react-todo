import React from "react";
import AddTodo from "../AddTodo/AddTodo";
import TodoList from "../TodoList/TodoList";
import VisibilityFilters from "../VisibilityFilters/VisibilityFilters";
import SearchFilters from "../SearchFilters/SearchFilters";


const AppRoot = () => (<div className="todo-app">
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
        <VisibilityFilters />
        <SearchFilters />
    </div>);

export default AppRoot;
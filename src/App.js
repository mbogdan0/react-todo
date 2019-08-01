import React, { Component } from 'react';
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import VisibilityFilters from "./components/VisibilityFilters/VisibilityFilters";
import SearchFilters from "./components/SearchFilters/SearchFilters";

class App extends Component {
  render() {
    return (
        <div className="todo-app">
            <h1>Todo List</h1>
            <AddTodo />
            <TodoList />
            <VisibilityFilters />
            <SearchFilters />
        </div>
    );
  }
}

export default App;

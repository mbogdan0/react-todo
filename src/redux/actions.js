
import {TOGGLE_TODO, SET_FILTER, ADD_TODO, SET_SEARCH, DELETE_TODO, LOAD_TODOS, LOAD_TODOS_OK} from "./actionTypes";


export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: Date.now(),
        content
    }
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: { id }
});

export const setFilter = searchFilter => ({
    type: SET_FILTER,
    payload: { searchFilter }
});

export const setSearch = term => ({
    type: SET_SEARCH,
    payload: { term }
});

export const deleteTodo = todoId => ({
    type: DELETE_TODO,
    payload: {todoId}
});


export const startLoadTodos = () => ({
    type: LOAD_TODOS
});

export const successLoadTodos = (data) => ({
    type: LOAD_TODOS_OK,
    payload: {data}
});
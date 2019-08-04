import { VISIBILITY_FILTERS } from "../constants";
import { createSelector } from 'reselect';

export const getTodos = store => store.todos.data;

export const getSearchFilter = store => store.todosFilters.searchTerm;

export const getVisibilityFilter = store => store.todosFilters.searchFilter;

export const getStateTodos = store => {
    const {data, ...state} = store.todos;
    return state;
};

export const getTodosByVisibilityFilter = createSelector(
    getTodos,
    getVisibilityFilter,
    (todos, filter) => {
        switch (filter) {
            case VISIBILITY_FILTERS.COMPLETED:
                return todos.filter(todo => todo.completed);
            case VISIBILITY_FILTERS.INCOMPLETE:
                return todos.filter(todo => !todo.completed);
            case VISIBILITY_FILTERS.ALL:
            default:
                return todos;
        }
    }
);

export const getFilteredTodos = createSelector(
    getTodosByVisibilityFilter,
    getSearchFilter,
    (todos, term) =>
        todos.filter(item => item.content.toLowerCase().indexOf(term.toLocaleString()) > -1)
);

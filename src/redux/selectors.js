import { VISIBILITY_FILTERS } from "../constants";
import { createSelector } from 'reselect';

export const getTodos = store => store.todos;

export const getSearchFilter = store => store.todosFilters.searchTerm;

export const getVisibilityFilter = store => store.todosFilters.searchFilter;


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

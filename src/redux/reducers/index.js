import { combineReducers } from "redux";
import todos from "./todos";
import todosFilters from "./todosFilters";

export default combineReducers({
    todos,
    todosFilters
});

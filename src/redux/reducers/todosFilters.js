import {SET_FILTER, SET_SEARCH} from "../actionTypes";
import {VISIBILITY_FILTERS} from "../../constants";
import produce from "immer";

const initialState = {
    searchTerm: '',
    searchFilter: VISIBILITY_FILTERS.ALL
};

const todosFilters = (state = initialState, action) =>
    produce(state, draft => {

        switch (action.type) {

            case SET_SEARCH: {
                const { term } = action.payload;
                draft.searchTerm = term;
                break;
            }

            case SET_FILTER: {
                const { searchFilter } = action.payload;
                draft.searchFilter = searchFilter;
                break;
            }

        }

    });

export default todosFilters;

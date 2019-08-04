import {TOGGLE_TODO, ADD_TODO, DELETE_TODO, LOAD_TODOS, LOAD_TODOS_OK} from "../actionTypes";
import produce from "immer";


const initialState = {
    isLoading: false,
    loadedError: false,
    data: []
}

const todosReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {

            case LOAD_TODOS: {
                draft.isLoading = true;
                draft.loadedError = false;
                return draft;
            }

            case LOAD_TODOS_OK: {
                const {data} = action.payload;
                draft.isLoading = false;
                draft.loadedError = false;
                draft.data = data;
                return draft;
            }

            case ADD_TODO: {
                const { id, content } = action.payload;
                const newObj = { id, content, completed: false };
                draft.data.push(newObj);
                return draft;
            }

            case TOGGLE_TODO: {
                const { id } = action.payload;
                draft.data.map(item => {
                    if (item.id === id) {
                        item.completed = !item.completed;
                    }
                    return item;
                });
                return draft;
            }

            case DELETE_TODO: {
                const { todoId } = action.payload;
                draft.data.splice(draft.data.findIndex(item => item.id === todoId), 1);
                return draft;
            }

            default:
                return draft;
        }
    });

export default todosReducer;
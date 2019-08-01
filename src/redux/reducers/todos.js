import { TOGGLE_TODO, ADD_TODO } from "../actionTypes";
import produce from "immer";

const initialState = [
    {id: 1, content: 'Hi dear! how are you?)', completed: false},
    {id: 2, content: 'Hello honey! What is up?', completed: false},
    {id: 3, content: 'Are you ready for new task?', completed: true}
];

const todosReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {

            case ADD_TODO: {
                const { id, content } = action.payload;
                const newObj = { id, content, completed: false };
                draft.push(newObj);
                break;
            }

            case TOGGLE_TODO: {
                const { id } = action.payload;
                draft.map(item => {
                    if (item.id === id) {
                        item.completed = !item.completed;
                    }
                    return item;
                });
                break;
            }

        }
    });

export default todosReducer;
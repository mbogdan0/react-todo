import {startLoadTodos, successLoadTodos} from "../redux/actions";

export const fetchTodos = () => {
    return dispatch => {
        dispatch(startLoadTodos());

        setTimeout(() => {
            const data = [
                {id: 1, content: 'Hi dear! how are you?)', completed: false},
                {id: 2, content: 'Hello honey! What is up?', completed: false},
                {id: 3, content: 'Are you ready for new task?', completed: true}
            ];

            dispatch(successLoadTodos(data));
        }, 800);
    };

};

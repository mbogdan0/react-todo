import React from "react";
import { useDispatch } from "react-redux";
import {deleteTodo} from "../../../redux/actions";

const TodoDelete = ({ todoId }) => {

    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteTodo(todoId));

    return (
      <span onClick={handleDelete}>
          ❌
      </span>
    );
};

export default TodoDelete;
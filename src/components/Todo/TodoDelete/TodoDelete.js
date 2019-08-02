import React from "react";
import { useDispatch } from "react-redux";
import {DELETE_TODO} from "../../../redux/actionTypes";

const TodoDelete = ({ todoId }) => {

    const dispatch = useDispatch();
    const handleDelete = () => dispatch({type: DELETE_TODO, payload: {todoId}});

    return (
      <span onClick={handleDelete}>
          ❌
      </span>
    );
};

export default TodoDelete;
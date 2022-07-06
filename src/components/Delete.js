import React from 'react';
import { MdDeleteForever } from "react-icons/md";

const Delete = ({handleClearTodos, todos}) => {
    return (
        <div className="delete">
            
            <div>{ todos.filter ( todo => !todo.complete ).length } left to do</div>
            <button onClick = { handleClearTodos } className="btn-del"><MdDeleteForever /></button>
        </div>
    );
};

export default Delete;
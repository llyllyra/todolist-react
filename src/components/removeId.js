import React, { useState } from 'react';
import { MdRemoveCircleOutline } from "react-icons/md";

const RemoveId = ({todos, todo, setTodos}) => {
	
	const removeId = (id) => {
	  const removeArr = [...todos].filter(todo = todo.id !== id )
		setTodos(removeArr)
	}
	
	
	
    return (
        <div>
			<span>
			
			</span>
        </div>
    );
};

export default RemoveId;
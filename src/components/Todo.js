import React from 'react';
import { MdRemoveCircleOutline } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";

export default function Todo ( { todo, toggleTodo, removeId } )
{
	
	
	function handleTodoClick ()
	{
		toggleTodo ( todo.id );
	}
	
	function remove ()
	{
		removeId ( todo.id );
		
	}
	
	
	return (
			<div className = { todo.complete === true ? "todo-list complete" : "todo-list" }>
				<section onClick = { handleTodoClick } className = "list-Text">{ todo.name }</section>
				<section
						className = { todo.complete === true ? "list-icon" : "list-icon complete-Icon" }
						onClick = { remove }
				>
					<MdRemoveCircleOutline />
				</section>
			</div>
	);
}
import React, { useState } from 'react';
import {
	MdRemoveCircleOutline,
	MdUpdate
}                          from "react-icons/md";

export default function Todo ( {
	                               todo,
	                               toggleTodo,
	                               removeId,
	                               handleUpade
                               } )
{
	const [ onEdit, setOnEdit ]       = useState ( false );
	const [ editValue, setEditValue ] = useState ( todo.name );
	
	const handleTodoClick = () =>
	{
		toggleTodo ( todo.id );
	};
	
	const remove = () =>
	{
		removeId ( todo.id );
	};
	
	
	const handleOnUpdate = () =>
	{
		setOnEdit ( true );
	};
	
	const handleSave = id =>
	{
		setOnEdit ( false );
		if ( editValue )
		{
			handleUpade (
					editValue,
					id
			);
		}
		else
		{
			setEditValue ( todo.name );
		}
		
	};
	
	
	if ( onEdit )
	{
		return (
				<div
						className = { todo.complete
						              === true
						              ? "todo-list complete"
						              : "todo-list" }
				>
					<input
							type = "text"
							id = "editValue"
							value = { editValue }
							name = "editValue"
							onChange = { e => setEditValue ( e.target.value ) }
							className="inputUpdate"
					/>
					
					<button
							className="btn-update"
							onClick = { () => handleSave ( todo.id )
							
					}>Save</button>
				</div>
		);
	}
	
	else
	{
		return (
				<div
						className = { todo.complete
						              === true
						              ? "todo-list complete"
						              : "todo-list"
							
						}
				>
					<p
							onClick = { handleTodoClick } className = "list-Text"
					>{ todo.name }</p>
					<section
							className = { todo.complete
							              === true
							              ? "list-icon"
							              : "list-icon complete-Icon" }
							onClick = { remove }
					>
						<MdRemoveCircleOutline />
					</section>
					<section
							className = { todo.complete
							              !== true
							              ? "list-icon"
							              : "list-icon update-Icon" }
							onClick = { handleOnUpdate }
					>
						<MdUpdate />
					</section>
				</div>
		);
	}
	
}
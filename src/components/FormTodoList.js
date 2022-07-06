import React from 'react';
import { MdAddTask } from "react-icons/md";

const FormTodoList = ( { todoNameRef, handleAddTodo } ) =>
{
	return (
			<section className = "form-section">
				<input ref = { todoNameRef } type = "text" placeholder = "Que devez-vous faire?" />
				<button onClick = { handleAddTodo } className = "btn-Add"><MdAddTask /></button>
			</section>
	);
};

export default FormTodoList;
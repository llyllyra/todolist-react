import React         from 'react';
import { MdAddTask } from "react-icons/md";

const FormTodoList = ( {
	                       todoRef,
	                       handleAddTodo
	
                       } ) =>
{
	
	return (
			<section
					className = "form-section"
			>
				
				<section className = "form">
					<input
							ref = { todoRef }
							type = "text"
							placeholder = "Que devez-vous faire?"
							className = "form-text"
					/>
				</section>
				
				<button
						onClick = { handleAddTodo }
						className = "btn-Add"
				><MdAddTask /></button>
			</section>
	);
};

export default FormTodoList;
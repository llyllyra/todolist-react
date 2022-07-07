import React               from 'react';
import { MdDeleteForever } from "react-icons/md";

const Delete = ( {
	                 handleClearTodos,
	                 todos
                 } ) =>
{
	let todoLength = todos.filter ( todo => !todo.complete ).length;
	
	return (
			<section className = "delete">
				<div>
					<span
							className = { todoLength
							              === 0
							              ? "false"
							              : "red" }
					>{ todoLength } tache{ todoLength
					                       > 1
					                       ? "s"
					                       : "" } à faire</span>
				
				</div>
				<button
						onClick = { handleClearTodos }
						className = "btn-del"
				>
					<MdDeleteForever />
				</button>
			</section>
	);
};

export default Delete;
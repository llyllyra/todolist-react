import React               from 'react';
import { MdDeleteForever } from "react-icons/md";

const Delete = ( {
	                 handleClearTodos,
	                 todos
                 } ) =>
{
	let test = todos.filter ( todo => !todo.complete ).length;
	return (
			<div className = "delete">
				<div>
					<span
							className = { test
							              === 0
							              ? "false"
							              : "red" }
					>{ test } tache{ test
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
			</div>
	);
};

export default Delete;
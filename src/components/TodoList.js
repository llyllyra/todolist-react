import React from 'react';
import Todo  from './Todo';

export default function TodoList ( {
	                                   todos,
	                                   toggleTodo,
	                                   removeId,
	                                   handleUpade
                                   } )
{
	return (
			todos.map ( todo =>
			            {
				            return <Todo
						            key = { todo.id }
						            toggleTodo = { toggleTodo }
						            todo = { todo }
						            removeId = { removeId }
						            handleUpade = { handleUpade }
				            />;
			            } )
	);
}
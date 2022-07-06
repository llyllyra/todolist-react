import React, { useState, useRef, useEffect } from 'react';
import Delete from "./Delete.js";
import FormTodoList from "./FormTodoList.js";
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App ()
{
	const [ todos, setTodos ] = useState ( [] );
	const todoNameRef         = useRef ();
	
	useEffect (
			() =>
			{
				const storedTodos = JSON.parse ( localStorage.getItem ( LOCAL_STORAGE_KEY ) );
				if ( storedTodos ) setTodos ( storedTodos );
			},
			[]
	);
	
	useEffect (
			() =>
			{
				localStorage.setItem (
						LOCAL_STORAGE_KEY,
						JSON.stringify ( todos )
				);
			},
			[ todos ]
	);
	
	function toggleTodo ( id )
	{
		const newTodos = [ ... todos ];
		const todo     = newTodos.find ( todo => todo.id === id );
		todo.complete  = !todo.complete;
		setTodos ( newTodos );
	}
	
	function handleAddTodo ( e )
	{
		const name = todoNameRef.current.value;
		if ( name === '' ) return;
		setTodos ( prevTodos =>
		           {
			           return [ ... prevTodos, { id: uuidv4 (), name: name, complete: false } ];
		           } );
		todoNameRef.current.value = null;
	}
	
	function removeId ( id )
	{
		const removeArr = [ ... todos ].filter ( todo => todo.id !== id );
		setTodos ( removeArr );
		
	}
	
	
	function handleClearTodos ()
	{
		const newTodos = todos.filter ( todo => !todo.complete );
		setTodos ( newTodos );
	}
	
	return (
			<>
				<nav>
					<p>Todo List de Marlène</p>
				</nav>
				<main>
					<FormTodoList todoNameRef = { todoNameRef } handleAddTodo = { handleAddTodo } />
					<Delete todos = { todos } handleClearTodos = { handleClearTodos } />
					<ul>
						<TodoList todos = { todos } toggleTodo = { toggleTodo } removeId = { removeId } />
					</ul>
				</main>
			</>
	);
}

export default App;
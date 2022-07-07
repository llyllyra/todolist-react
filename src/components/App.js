import React, {
	useState,
	useRef,
	useEffect
}                       from 'react';
import { Helmet }       from "react-helmet";
import Delete           from "./Delete.js";
import FormTodoList     from "./FormTodoList.js";
import TodoList         from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App ()
{
	const [ todos, setTodos ] = useState ( [] );
	const todoRef             = useRef ();
	const importanceRef       = useRef ();
	
	useEffect (
			() =>
			{
				const storedTodos = JSON.parse ( localStorage.getItem ( LOCAL_STORAGE_KEY ) );
				if ( storedTodos )
				{
					setTodos ( storedTodos );
				}
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
	
	const toggleTodo = ( id ) =>
	{
		const newTodos = [ ...todos ];
		const todo     = newTodos.find ( todo => todo.id
		                                         === id );
		todo.complete
		               = !todo.complete;
		setTodos ( newTodos );
	};
	
	const handleAddTodo = () =>
	{
		let importance = "";
		const name     = todoRef.current.value;
		if ( name
		     === '' )
		{
			return;
		}
		
		
		setTodos ( prevTodos =>
		           {
			           return [ ...prevTodos,
			                    {
				                    id        : uuidv4 (),
				                    name      : name,
				                    complete  : false,
				                    importance: importance
			                    }
			           ];
		           } );
		todoRef.current.value
				= null;
	};
	
	const removeId = id =>
	{
		const removeArr = todos
				.filter ( todo => todo.id !== id );
		setTodos ( removeArr );
		
	};
	
	const handleUpade = (
			editValue,
			id
	) =>
	{
		const newTodos = [ ...todos ];
		const todo     = newTodos.find ( todo => todo.id
		                                         === id );
		todo.name
		               = editValue;
		setTodos ( newTodos );
	};
	
	
	const handleClearTodos = () =>
	{
		const newTodos = todos.filter ( todo => !todo.complete );
		setTodos ( newTodos );
	};
	
	return (
			<>
				<Helmet>
					<title>Todo List</title>
				</Helmet>
				<nav>
					<p>Todo List de Marlène</p>
				</nav>
				<main>
					<FormTodoList
							todoRef = { todoRef }
							importanceRef = { importanceRef }
							handleAddTodo = { handleAddTodo }
					/>
					<Delete
							todos = { todos }
							handleClearTodos = { handleClearTodos }
					/>
					<ul>
						<TodoList
								todos = { todos }
								toggleTodo = { toggleTodo }
								removeId = { removeId }
								handleUpade = { handleUpade }
						/>
					</ul>
				</main>
			</>
	);
}

export default App;
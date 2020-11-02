import { useState, useEffect } from 'react';

export default function TodoHooks(value) {
	const [todos, setTodos] = useState(value);
	const [checked, setChecked] = useState([]);
	const [showNewTodo, toggleShowNewTodo] = useState(false);
	let DateNow = new Date();

	console.log(DateNow.getDate());
	DateNow.setFullYear(2020, 10, 29);

	useEffect(() => {
		function syncLocalStorage() {
			window.localStorage.setItem('todos', JSON.stringify(todos));
		}
		syncLocalStorage();
	}, [todos]);

	return {
		DateNow,
		todos,
		checked,
		showNewTodo,
		handlePlusIconClick: () => {
			toggleShowNewTodo(!showNewTodo);
		},
		handleToggle: (value) => () => {
			const currentIndex = checked.indexOf(value);
			const newChecked = [...checked];

			if (currentIndex === -1) {
				newChecked.push(value);
			} else {
				newChecked.splice(currentIndex, 1);
			}

			let todoToBeChecked = todos[value];
			todoToBeChecked.isComplete = !todoToBeChecked.isComplete;
			setTodos(
				todos
					.slice(0, value)
					.concat(todoToBeChecked, todos.slice(value + 1, todos.length))
			);
			setChecked(newChecked);
		},

		addNewTodo: (todoObj) => {
			// console.log(todoObj);
			setTodos([todoObj, ...todos]);
			// setTodos(todos.reverse())
		},
		editClicked: (id) => {
			if (showNewTodo) {
				toggleShowNewTodo(false);
			}
			console.log(id);
			let todoToEdit = todos[id];

			todoToEdit.edit = !todoToEdit.edit;

			setTodos(
				todos.slice(0, id).concat(todoToEdit, todos.slice(id + 1, todos.length))
			);
		},
		deleteTodo: (e, idx) => {
			e.stopPropagation();
			setChecked(
				checked.slice(0, idx).concat(checked.slice(idx + 1, checked.length))
			);
			setTodos(todos.slice(0, idx).concat(todos.slice(idx + 1, todos.length)));
		},

		editTodo: (id, todoObj) => {
			setTodos(
				todos.slice(0, id).concat(todoObj, todos.slice(id + 1, todos.length))
			);
		},
	};
}

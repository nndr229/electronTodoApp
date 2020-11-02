// import { v4 as uuid } from 'uuid';
// import React, { useReducer, useEffect } from 'react';

// const reducer = (state, action) => {
// 	switch (action.type) {
// 		case 'PLUS_CLICK':
// 			return { showNewTodo: !state.showNewTodo };
// 		case 'TOGGLE':
// 			return () => {
// 				const currentIndex = state.checked.indexOf(action.value);
// 				const newChecked = [...state.checked];

// 				if (currentIndex === -1) {
// 					newChecked.push(action.value);
// 				} else {
// 					newChecked.splice(currentIndex, 1);
// 				}

// 				let todoToBeChecked = state.todos[action.value];
// 				todoToBeChecked.isComplete = !todoToBeChecked.isComplete;
// 				return {
// 					todos: state.todos
// 						.slice(0, action.value)
// 						.concat(
// 							todoToBeChecked,
// 							state.todos.slice(action.value + 1, state.todos.length)
// 						),

// 					checked: newChecked,
// 				};
// 			};
// 		case 'ADD':
// 			return { todos: [action.todoObj, ...state.todos] };
// 		case 'EDIT':
// 			return {
// 				todos: state.todos
// 					.slice(0, action.id)
// 					.concat(
// 						action.todoObj,
// 						state.todos.slice(action.id + 1, state.todos.length)
// 					),
// 			};

// 		case 'EDIT_CLICKED':
// 			return () => {
// 				// if (showNewTodo) {
// 				//     toggleShowNewTodo(false);
// 				// }
// 				console.log(action.id);
// 				let todoToEdit = state.todos[action.id];

// 				todoToEdit.edit = !todoToEdit.edit;
// 				return {
// 					todos: state.todos
// 						.slice(0, action.id)
// 						.concat(
// 							todoToEdit,
// 							state.todos.slice(action.id + 1, state.todos.length)
// 						),
// 				};
// 			};
// 		case 'DELETE':
// 			return () => {
// 				action.e.stopPropagation();

// 				return {
// 					checked: state.checked
// 						.slice(0, action.idx)
// 						.concat(state.checked.slice(action.idx + 1, state.checked.length)),
// 					todos: state.todos
// 						.slice(0, action.idx)
// 						.concat(state.todos.slice(action.idx + 1, state.todos.length)),
// 				};
// 			};

// 		default:
// 			return state;
// 	}
// };

// export default function TodoReducer(value) {
// 	const [todos, todoDispatch] = useReducer(reducer, value);

// 	const [checked, checkedDispatch] = useReducer(reducer, []);
// 	const [showNewTodo, newTodoDispatch] = useReducer(reducer, false);

// 	let DateNow = new Date('2020-10-26 00:00');
// 	DateNow.setFullYear(2020, 10, 26);
// 	console.log(DateNow.getMonth());

// 	useEffect(() => {
// 		function syncLocalStorage() {
// 			window.localStorage.setItem('todos', JSON.stringify(todos));
// 			DateNow = new Date();
// 		}
// 		syncLocalStorage();
// 	}, [todos]);
// }

// // const [todos, setTodos] = useState(value);
// // const [checked, setChecked] = useState([]);
// // const [showNewTodo, toggleShowNewTodo] = useState(false);

// // let DateNow = new Date("2020-10-26 00:00");
// // DateNow.setFullYear(2020, 10, 26);
// // console.log(DateNow.getMonth());

// // useEffect(() => {
// //     function syncLocalStorage() {
// //         window.localStorage.setItem("todos", JSON.stringify(todos));
// //         DateNow = new Date();
// //     }
// //     syncLocalStorage();
// // }, [todos]);

// // return {
// //     DateNow,
// //     todos,
// //     checked,
// //     showNewTodo,
// //     handlePlusIconClick: () => {
// //         toggleShowNewTodo(!showNewTodo);
// //     },
// // handleToggle: (value) => () => {
// //     const currentIndex = checked.indexOf(value);
// //     const newChecked = [...checked];

// //     if (currentIndex === -1) {
// //         newChecked.push(value);
// //     } else {
// //         newChecked.splice(currentIndex, 1);
// //     }

// //     let todoToBeChecked = todos[value];
// //     todoToBeChecked.isComplete = !todoToBeChecked.isComplete;
// //     setTodos(
// //         todos
// //             .slice(0, value)
// //             .concat(todoToBeChecked, todos.slice(value + 1, todos.length))
// //     );
// //     setChecked(newChecked);
// // },

// // addNewTodo: {
// // console.log(todoObj);

// // setTodos(todos.reverse())
// // },
// //     editClicked: (id) => {
// //     if (showNewTodo) {
// //         toggleShowNewTodo(false);
// //     }
// //     console.log(id);
// //     let todoToEdit = todos[id];

// //     todoToEdit.edit = !todoToEdit.edit;

// //     setTodos(
// //         todos.slice(0, id).concat(todoToEdit, todos.slice(id + 1, todos.length))
// //     );
// // },
// // deleteTodo: (e, idx) => {
// //     e.stopPropagation();
// //     setChecked(
// //         checked.slice(0, idx).concat(checked.slice(idx + 1, checked.length))
// //     );
// //     setTodos(todos.slice(0, idx).concat(todos.slice(idx + 1, todos.length)));
// // },

// //     editTodo: (id, todoObj) => {
// // setTodos(
// //     todos.slice(0, id).concat(todoObj, todos.slice(id + 1, todos.length))
// // );
// //     },
// // }

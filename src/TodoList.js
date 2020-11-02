import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import NewTodoForm from './NewTodoForm';
import EditTodoForm from './EditTodoForm';
import { v4 as uuidv4 } from 'uuid';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import TodoHooks from './hooks/TodoHooks';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'fixed',
		bottom: theme.spacing(2),
		right: theme.spacing(2),
		display: '',
	},
	box: {
		width: '35%',
		margin: '10% auto 0 auto',
		minWidth: '450px',
		'@media (max-width: 576px)': {
			width: '35%',
			margin: '10% auto 0 auto',
			minWidth: '95%',
		},
	},

	container: {
		boxShadow: '5px 10px #888888;',
		padding: '0',
		background: '#eef2f3',
	},
	edit: {
		display: 'none',
	},
	showEdit: {
		marginLeft: '3.1px',
		display: 'flex',
		flexDirection: 'row',
		width: '100%',
	},
	deleteIcon: {
		cursor: 'pointer',
		color: '#333331',
	},
	RightIcons: {
		'&:hover svg': {
			transform: 'scale(1.3,1.3)',
			transition: '225ms ease-in',
		},
	},
	hideNewTodo: {
		display: 'none',
	},
	showNewTodo: {
		display: 'flex',
	},
	plusIcon: {
		cursor: 'pointer',
		color: 'white',
		width: '34px',
		height: '34px',
		marginRight: '0px',
	},
	editIcon: {
		cursor: 'pointer',
		color: '#333331',
		marginRight: '2px',
	},
	date: {
		'@media (max-width: 576px)': {
			display: 'none',
		},
	},
	todoGreen: {
		color: '#333331',
		'@media (max-width: 576px)': {
			color: 'green',
		},
	},
	todoRed: {
		color: '#333331',
		'@media (max-width: 576px)': {
			color: 'red',
		},
	},
}));

function TodoList(props) {
	let todoItems = [
		{ name: 'Make Dinner', isComplete: false, edit: false, date: '2020-10-02' },
		{
			name: 'Play Shadow Of Tomb Raider',
			isComplete: false,
			edit: false,
			date: '2020-10-02',
		},
		{
			name: 'Finish studying',
			isComplete: false,
			edit: false,
			date: '2020-10-02',
		},
	];
	const savedTodos = JSON.parse(window.localStorage.getItem('todos'));

	const classes = useStyles();
	const {
		handlePlusIconClick,
		handleToggle,
		addNewTodo,
		editClicked,
		deleteTodo,
		editTodo,
		todos,
		checked,
		showNewTodo,
		DateNow,
	} = TodoHooks(savedTodos || todoItems);
	console.log('Render todolist component');
	
	return (
		<Box className={classes.box}>
			<Container maxWidth='lg' className={classes.container}>
				<AppBar position='static'>
					<Toolbar>
						<Grid container justify='flex-start'>
							<Typography variant='h6'>Todo List</Typography>
						</Grid>
						<Grid container justify='flex-end'>
							<IconButton onClick={handlePlusIconClick}>
								<AddIcon className={classes.plusIcon} />
							</IconButton>
						</Grid>
					</Toolbar>
				</AppBar>
				<div
					className={showNewTodo ? classes.showNewTodo : classes.hideNewTodo}
				>
					<NewTodoForm addNewTodo={addNewTodo} />
				</div>
				<List>
					{todos.map((todo, idx) => {
						const labelId = `checkbox-list-label-${idx}`;
						return (
							<div key={uuidv4()}>
								<ListItem
									button
									onClick={handleToggle(idx)}
									style={{ zIndex: 0 }}
									className={classes.li}
								>
									<ListItemIcon>
										<Checkbox
											// edge='start'
											checked={checked.indexOf(idx) !== -1}
											tabIndex={-1}
											// disableRipple
											inputProps={{ 'aria-labelledby': labelId }}
										/>
									</ListItemIcon>
									<ListItemText
										className={
											todo.date
												? Number(todo.date.split('-')[2]) - DateNow.getDate() <=
														2 &&
												  Number(todo.date.split('-')[1]) <=
														DateNow.getMonth() &&
												  Number(todo.date.split('-')[0]) <=
														DateNow.getFullYear()
													? classes.todoRed
													: classes.todoGreen
												: null
										}
										style={{
											wordWrap: 'break-word',
											textDecoration: todo.isComplete ? 'line-through' : 'none',
										}}
										primary={todo.name}
									/>

									<span
										style={{
											marginRight: '20px',
											minWidth: '90px',
											color:
												todo.date !== undefined
													? Number(todo.date.split('-')[2]) -
															DateNow.getDate() <=
															2 &&
													  Number(todo.date.split('-')[1]) <=
															DateNow.getMonth() &&
													  Number(todo.date.split('-')[0]) <=
															DateNow.getFullYear()
														? 'red'
														: 'green'
													: null,
										}}
										className={classes.date}
									>
										{todo.date !== ''
											? todo.date.split('-').reverse().join('-')
											: null}
									</span>
									<ListItemSecondaryAction className={classes.RightIcons}>
										<EditIcon
											onClick={() => [editClicked(idx)]}
											className={classes.editIcon}
										/>
										<DeleteIcon
											className={classes.deleteIcon}
											onClick={(e) => deleteTodo(e, idx)}
										/>
									</ListItemSecondaryAction>
								</ListItem>
								<ListItem>
									<div className={todo.edit ? classes.showEdit : classes.edit}>
										<EditTodoForm
											editTodo={editTodo}
											key={uuidv4()}
											date={todo.date}
											id={idx}
											todo={todo.name}
											isComplete={todo.isComplete}
										/>
									</div>
								</ListItem>
							</div>
						);
					})}
				</List>
			</Container>
		</Box>
	);
}
export default withStyles(useStyles)(TodoList);

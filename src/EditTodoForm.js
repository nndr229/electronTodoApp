import React from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Container from '@material-ui/core/Container';
import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import stateChangeHook from './hooks/StateChangeHook';

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		paddingLeft: '28%',
		background: '#eef2f3',
		'@media (max-width: 576px)': {
			paddingLeft: '12%',
		},
	},
	textField: {
		width: 200,
	},
	icon: {
		display: 'inline',
		cursor: 'pointer',
	},
	addNewTodo: {
		width: '90%',
		display: 'inline',
	},
}));

export default function EditTodoForm(props) {
	const [EditTodo, setEditedTodo] = stateChangeHook(props.todo);
	const [date, setDate] = stateChangeHook(props.date);
	const classes = useStyles();
	console.log('Render Edit todo');
	return (
		<ValidatorForm
			style={{ width: '100%', zIndex: 25 }}
			instantValidate={false}
			onSubmit={() => {
				return props.editTodo(props.id, {
					name: EditTodo,
					isComplete: props.isComplete,
					edit: false,
					date: date,
				});
			}}
		>
			<TextValidator
				value={EditTodo}
				name='EditTodo'
				onChange={setEditedTodo}
				variant='filled'
				fullWidth
				// validators={["required"]}
				// errorMessages={[
				//     "required",
				//
				// ]}
				// variant='filled'
			/>
			<Container className={classes.container}>
				<TextValidator
					id='date'
					label='Deadline'
					type='date'
					value={date}
					size='small'
					// validators={["required"]}
					// errorMessages={["Pick a deadline"]}
					onChange={setDate}
					className={classes.textField}
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</Container>
		</ValidatorForm>
	);
}

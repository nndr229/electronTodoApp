import React, { memo } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Container from '@material-ui/core/Container';
import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import StateChangeHook from './hooks/StateChangeHook';

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		paddingLeft: '28%',
		background: '#eef2f3',
		'@media (max-width: 576px)': {
			paddingLeft: '16.4%',
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

export default memo(function NewTodoForm(props) {
	const [newTodo, changeNewTodo, resetTodo] = StateChangeHook('');
	const [date, changeDate, resetDate] = StateChangeHook('');
	const classes = useStyles();
	console.log('Render newtodo');

	return (
		<ValidatorForm
			style={{ width: '100%' }}
			// instantValidate={false}
			onSubmit={() => [
				resetTodo(),
				resetDate(),
				props.addNewTodo({ name: newTodo, isComplete: false, date: date }),
			]}
		>
			<TextValidator
				className={classes.addNewTodo}
				position='relative'
				value={newTodo}
				name='newTodo'
				onChange={changeNewTodo}
				placeholder='Add a New Todo'
				variant='filled'
				fullWidth
				validators={['required']}
				errorMessages={['Enter a todo']}
			/>
			<Container className={classes.container}>
				<TextValidator
					id='date'
					label='Deadline'
					type='date'
					value={date}
					size='small'
					format='dd-mm-yyyy'
					// validators={["required"]}
					// errorMessages={["Pick a deadline"]}
					onChange={changeDate}
					className={classes.textField}
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</Container>
		</ValidatorForm>
	);
});

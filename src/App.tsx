import { useForm } from 'react-hook-form';

import './App.css';
import { dynamicForm } from './data';
import FormInputs from './forms/FormInput';

function App() {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm();

	const formInput = Object.keys(dynamicForm).map((element: string) => {
		return (
			<FormInputs
				control={control}
				data={dynamicForm[element]}
				element={element}
				errors={errors}
				key={element}
			/>
		);
	});

	const onSubmit = (data: any) => {
		console.log(data);
	};
	return (
		<div className='App'>
			<form onSubmit={handleSubmit(onSubmit)}>
				{formInput}
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}

export default App;

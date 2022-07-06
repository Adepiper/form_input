import { Controller } from 'react-hook-form';
import { FormData } from '../data';
import Input from './Input';

const FormInputs = ({
	control,
	data,
	element,
	errors,
}: {
	control: any;
	data: FormData;
	element: string;
	errors: any;
}) => {
	const { rules, defaultValue, label, type } = data;

	return (
		<div>
			<label htmlFor={label}>{label}</label>
			<Controller
				name={element}
				control={control}
				rules={rules}
				defaultValue={defaultValue}
				render={({ field }) => (
					<>
						<Input
							onChange={field.onChange}
							type={type}
							rest={data}
							value={field.value}
							key={element}
						/>
					</>
				)}
			/>
			{errors[element] && <p>Requried</p>}
		</div>
	);
};

export default FormInputs;

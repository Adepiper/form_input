import { Controller } from 'react-hook-form';
import { errorMessages, FormData } from '../data';
import Input from './Input';

const FormInputs = ({
	control,
	data,
	element,
	errors,
	className,
}: {
	control: any;
	data: FormData;
	element: string;
	errors: any;
	className?: string;
}) => {
	const { rules, defaultValue, label, type } = data;

	return (
		<div className={className}>
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
			{errors[element] && (
				<p>{errorMessages(label)[errors[element]['type']]}</p>
			)}
		</div>
	);
};

export default FormInputs;

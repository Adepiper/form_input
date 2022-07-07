export const dynamicForm: DynamicForm = {
	firstName: {
		label: 'First Name',
		type: 'text',
		placeholder: 'Enter your first name',
		defaultValue: '',
		rules: {
			required: true,
			minLength: 4,
		},
	},
	lastName: {
		label: 'Last Name',
		type: 'text',
		placeholder: 'Enter your last name',
		defaultValue: '',
		rules: {
			required: true,
			minLength: 4,
		},
	},
	gender: {
		label: 'Gender',
		type: 'radio',
		options: ['male', 'female'],
		defaultValue: '',
		rules: {
			required: true,
		},
	},
	profession: {
		label: 'Profession',
		type: 'dropdown',
		options: [
			'Front-end Developer',
			'Back-end Developer',
			'Devops Engineer',
		],
		defaultValue: '',
		rules: {
			required: true,
		},
	},
	agree: {
		type: 'checkbox',
		label: '',
		checkboxLabel: 'I hereby agree to the terms.',
		defaultValue: false,
		rules: {
			required: false,
		},
	},
};

export const errorMessages = (value?: string): { [key: string]: string } => ({
	required: `${value} is required`,
	minLength: `${value} is too short`,
});

export type DynamicForm = {
	[key: string]: FormData;
};

export type FormData = {
	label?: string;
	type: string;
	placeholder?: string;
	defaultValue: any;
	rules: FormDataRules;
	options?: any[];
	checkboxLabel?: string;
};

type FormDataRules = {
	required?: boolean;
	minLength?: number;
	maxLength?: number;
};

import { TextField } from '@mui/material';
import style from './FormInputText.module.scss';
import { Controller, type RegisterOptions, useFormContext } from 'react-hook-form';

interface Props {
	name: string;
	label: string;
	type: inputType;
	autoFocus?: boolean;
	autoComplete?: string;
}

type inputType = 'text' | 'email' | 'password';

export const FormInputText = ({ name, label, type, autoFocus, autoComplete }: Props) => {
	const { control } = useFormContext();
	const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;

	const textRules: RegisterOptions = {
		required: 'Campo requerido',
		minLength: { value: 2, message: 'Mínimo 2 caracteres' },
		maxLength: { value: 50, message: 'Máximo 50 caracteres' },
	};
	const emailRules: RegisterOptions = {
		required: 'Campo requerido',
		pattern: { value: emailValidation, message: 'Email inválido' },
	};

	const passwordRules: RegisterOptions = {
		required: 'Campo requerido',
		minLength: { value: 8, message: 'Mínimo 8 caracteres' },
		maxLength: { value: 50, message: 'Máximo 50 caracteres' },
	};

	const setRules = (type: inputType) => {
		if (type === 'text') return textRules;
		if (type === 'email') return emailRules;
		if (type === 'password') return passwordRules;

		return undefined;
	};

	const rules = setRules(type);

	return (
		<Controller
			name={name}
			control={control}
			rules={rules}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<TextField
					// Input props
					label={label}
					type={type}
					margin='normal'
					autoFocus={autoFocus}
					autoComplete={autoComplete}
					color='primary'
					className={style.input}
					fullWidth
					// react-hook-form props
					value={value}
					onChange={onChange}
					error={Boolean(error)}
					helperText={error?.message ?? null}
				/>
			)}
		/>
	);
};

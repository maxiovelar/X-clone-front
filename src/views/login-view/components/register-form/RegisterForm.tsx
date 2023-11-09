import { FormProvider, useForm } from 'react-hook-form';
import { InputText } from '../input-text/InputText';
import { Box, Typography } from '@mui/material';
import { ButtonPrimaryPill } from '@/common/components';
import style from './RegisterForm.module.scss';
import { apiConfig } from '@/api/apiConfig';
import { ErrorMessage } from '../error-message/ErrorMessage';
import { useState } from 'react';

interface FormProps {
	firstname: string;
	lastname: string;
	username: string;
	email: string;
	password: string;
}

interface CustomError {
	response: {
		data: {
			detail: string;
		};
	};
}

const defaultValues = {
	firstname: '',
	lastname: '',
	username: '',
	email: '',
	password: '',
};

export const RegisterForm = () => {
	const [errorMessage, setErrorMessage] = useState<string>('');
	const methods = useForm<FormProps>({ defaultValues });

	const { handleSubmit, reset } = methods;

	const onSubmit = async (data: FormProps) => {
		try {
			const response = await apiConfig.post('/auth/register', data);
			console.log(response);
			setErrorMessage('');
			reset();
		} catch (error) {
			console.log(error);
			const err = error as CustomError;
			setErrorMessage(err.response.data.detail);
		}
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(onSubmit)} className={style['register-form']}>
				<Box display={'flex'} flexDirection={'column'} padding={{ xs: '24px 24px', sm: '16px 80px 0px' }}>
					<Typography id='modal-modal-title' variant='h4' component='h2' fontWeight={'bold'} marginBottom={'12px'}>
						Crea tu cuenta
					</Typography>
					<ErrorMessage>{errorMessage}</ErrorMessage>
					<InputText name='firstname' label='Nombre' type='text' autoComplete='off' />
					<InputText name='lastname' label='Apellido' type='text' autoComplete='off' />
					<InputText name='username' label='Nombre de usuario' type='text' autoComplete='off' />
					<InputText name='email' label='Correo electrónico' type='email' autoComplete='off' />
					<InputText name='password' label='Contraseña' type='password' autoComplete='off' />
				</Box>
				<Box
					position={'sticky'}
					bottom={'0'}
					display={'flex'}
					justifyContent={'center'}
					padding={'28px 80px'}
					zIndex={'100'}
				>
					<ButtonPrimaryPill variant='contained' type='submit' size='large'>
						Crear cuenta
					</ButtonPrimaryPill>
				</Box>
			</form>
		</FormProvider>
	);
};

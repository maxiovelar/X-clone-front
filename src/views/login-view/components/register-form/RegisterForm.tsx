import { FormProvider, useForm } from 'react-hook-form';
import { FormInputText } from '../custom-input/FormInputText';
import { Box, Typography } from '@mui/material';
import { ButtonPrimaryPill } from '@/common/components';

interface FormProps {
	firstname: string;
	lastname: string;
	username: string;
	email: string;
	password: string;
}

const defaultValues = {
	firstname: '',
	lastname: '',
	username: '',
	email: '',
	password: '',
};

export const RegisterForm = () => {
	const methods = useForm<FormProps>({ defaultValues });

	const { handleSubmit, reset } = methods;

	const onSubmit = (data: FormProps) => {
		reset();
		console.log(data);
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Box
					display={'flex'}
					flexDirection={'column'}
					padding={{ xs: '24px 24px', sm: '16px 80px 0px' }}
					overflow={'scroll'}
				>
					<Typography id='modal-modal-title' variant='h4' component='h2' fontWeight={'bold'} marginBottom={'12px'}>
						Crea tu cuenta
					</Typography>
					<FormInputText name='firstname' label='Nombre' type='text' autoComplete='off' />
					<FormInputText name='lastname' label='Apellido' type='text' autoComplete='off' />
					<FormInputText name='username' label='Nombre de usuario' type='text' autoComplete='off' />
					<FormInputText name='email' label='Correo electrónico' type='email' autoComplete='off' />
					<FormInputText name='password' label='Contraseña' type='password' autoComplete='off' />
				</Box>
				<Box display={'flex'} justifyContent={'center'} padding={'20px 80px'}>
					<ButtonPrimaryPill variant='contained' type='submit'>
						Crear cuenta
					</ButtonPrimaryPill>
				</Box>
			</form>
		</FormProvider>
	);
};

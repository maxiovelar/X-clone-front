import { FormProvider, useForm } from 'react-hook-form';
import { InputText } from '../input-text/InputText';
import { Box, Typography } from '@mui/material';
import { ButtonPrimaryPill } from '@/common/components';
import style from './RegisterForm.module.scss';
import { apiConfig } from '@/api/apiConfig';

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

	const onSubmit = async (data: FormProps) => {
		try {
			const response = await apiConfig.post('/auth/register', data);
			console.log(response);
		} catch (error) {
			console.log((error as Error).message);
		}
		reset();
		console.log(data);
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(onSubmit)} className={style['register-form']}>
				<Box display={'flex'} flexDirection={'column'} padding={{ xs: '24px 24px', sm: '16px 80px 0px' }}>
					<Typography id='modal-modal-title' variant='h4' component='h2' fontWeight={'bold'} marginBottom={'12px'}>
						Crea tu cuenta
					</Typography>
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

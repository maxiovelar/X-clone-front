import { RegisterModal } from '@/views/login-view/components/register-modal/RegisterModal';
import { Divider, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import style from './RightLoginPanel.module.scss';
import { GoogleLoginButton } from '../google-login-button/GoogleLoginButton';
import { AppleLoginButton } from '../apple-login-button/AppleLoginButton';
import { ButtonPrimaryPill } from '@/common/components';
import { TosText } from '../tos-text/TosText';

export const RightLoginPanel = () => {
	const [isRegisterModalOpen, setIsRegisterModalOpen] =
		useState<boolean>(false);
	const handleRegisterButtonClick = (): void => {
		setIsRegisterModalOpen(true);
	};
	return (
		<Stack
			direction='column'
			justifyContent='center'
			alignItems='start'
			spacing={{ xs: 4, md: 8 }}
		>
			<Typography
				variant='h2'
				fontFamily={style['archivo-black']}
				fontSize={{ xs: '2.75rem', sm: '3.75rem' }}
				paddingTop={'48px'}
			>
				Lo que está
				<br /> pasando ahora
			</Typography>

			<Stack
				direction='column'
				spacing={1.5}
				width={'315px'}
				className={style['login-buttons']}
			>
				<Typography
					variant='h4'
					fontFamily={style['archivo-black']}
					fontSize={{ xs: '1.75rem', md: '2.25rem' }}
					paddingBottom={'12px'}
				>
					Únete hoy
				</Typography>
				<GoogleLoginButton />
				<AppleLoginButton />
				<Divider>o</Divider>
				<ButtonPrimaryPill
					variant='contained'
					onClick={handleRegisterButtonClick}
				>
					Crear cuenta
				</ButtonPrimaryPill>
				<TosText />
			</Stack>

			<Stack
				direction={'column'}
				spacing={1.5}
				width={'315px'}
				className={style['login-buttons']}
			>
				<Typography fontWeight={'bold'}>¿Ya tienes una cuenta?</Typography>
				<ButtonPrimaryPill variant='outlined'>Iniciar sesión</ButtonPrimaryPill>
			</Stack>
			<RegisterModal
				isOpen={isRegisterModalOpen}
				setIsOpen={setIsRegisterModalOpen}
			/>
		</Stack>
	);
};

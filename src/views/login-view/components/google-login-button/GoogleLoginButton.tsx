import { GoogleIcon } from '@/common/components/icons';
import { Button } from '@mui/material';
import style from './GoogleLoginButton.module.scss';

export const GoogleLoginButton = () => {
	return (
		<Button variant='outlined' className={style.button}>
			<GoogleIcon height={20} width={20} />
			Registrarse con Google
		</Button>
	);
};

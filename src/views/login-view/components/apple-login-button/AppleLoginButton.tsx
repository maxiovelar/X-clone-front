import { AppleIcon } from '@/common/components/icons';
import { Button } from '@mui/material';
import style from './AppleLoginButton.module.scss';

export const AppleLoginButton = () => {
	return (
		<Button variant='outlined' className={style.button}>
			<AppleIcon height={18} width={18} />
			Registrarse con Apple
		</Button>
	);
};

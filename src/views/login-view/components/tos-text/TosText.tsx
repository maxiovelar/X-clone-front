import { Typography, Link as AnchorLink } from '@mui/material';
import style from './TosText.module.scss';

export const TosText = () => {
	return (
		<>
			<Typography
				variant='caption'
				align='justify'
				lineHeight={'0.75rem'}
				color={style.gray}
			>
				Al registrarte, aceptas los{' '}
				<AnchorLink href='#' color='primary' underline='none'>
					Términos de servicio{' '}
				</AnchorLink>
				y la{' '}
				<AnchorLink href='#' color='primary' underline='none'>
					Política de privacidad
				</AnchorLink>
				, incluida la política de{' '}
				<AnchorLink href='#' color='primary' underline='none'>
					Uso de Cookies
				</AnchorLink>
				.
			</Typography>
		</>
	);
};

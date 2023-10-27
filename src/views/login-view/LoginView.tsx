import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import style from './LoginView.module.scss';

import { FooterLogin, LeftLoginPanel, RightLoginPanel } from './components';

export const LoginView = () => {
	return (
		<Box height={'100vh'} display={'flex'} flexDirection={'column'}>
			<Container maxWidth='xl' className={style.container}>
				<Grid container width={'100%'} margin={'0 auto'} className={style.grid}>
					<Grid xs={12} md={6} xl={7}>
						<LeftLoginPanel />
					</Grid>
					<Grid xs={12} md={6} xl={5}>
						<RightLoginPanel />
					</Grid>
				</Grid>
			</Container>
			<FooterLogin />
		</Box>
	);
};

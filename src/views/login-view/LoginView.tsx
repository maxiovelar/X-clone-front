import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import style from './LoginView.module.scss';

import { FooterLogin, LeftLoginPanel, RightLoginPanel } from './components';
import { Head } from '@/common/components';

export const LoginView = () => {
	const gridMaxWidth = { xs: '550px', md: '100%' };
	const gridPadding = { xs: '14px', md: '0px' };
	const gridMargin = '0 auto';

	return (
		<>
			<Head title={'Regístrate en X/X'} description='X clone app' name='Maxi Ovelar' type='page' />
			<Box height={'100vh'} display={'flex'} flexDirection={'column'}>
				<Container maxWidth='xl' className={style.container}>
					<Grid container maxWidth={gridMaxWidth} padding={gridPadding} width={'100%'} margin={gridMargin}>
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
		</>
	);
};

import { XIcon } from '@/common/components/icons';
import { Box } from '@mui/material';
import style from './LeftLoginPanel.module.scss';

export const LeftLoginPanel = () => {
	const alignItems = { xs: 'start', md: 'center' };
	const justifyContent = { xs: 'start', md: 'center' };

	return (
		<Box
			display={'flex'}
			flexDirection={'row'}
			alignItems={alignItems}
			justifyContent={justifyContent}
			height={'100%'}
		>
			<XIcon className={style.icon} />
		</Box>
	);
};

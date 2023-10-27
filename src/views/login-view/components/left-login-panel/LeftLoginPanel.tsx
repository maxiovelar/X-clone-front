import { XIcon } from '@/common/components/icons';
import { Box } from '@mui/material';
import style from './LeftLoginPanel.module.scss';

export const LeftLoginPanel = () => {
	return (
		<Box
			display={'flex'}
			flexDirection={'row'}
			alignItems={'center'}
			justifyContent={'center'}
			height={'100%'}
			className={style['icon-container']}
		>
			<XIcon className={style.icon} />
		</Box>
	);
};

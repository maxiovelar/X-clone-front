import { Box, IconButton, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import style from './RegisterModal.module.scss';
import { XIcon } from '@/common/components/icons';
import { RegisterForm } from '../register-form/RegisterForm';

interface Props {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}

export const RegisterModal = ({ isOpen, setIsOpen }: Props) => {
	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		<Modal
			open={isOpen}
			onClose={handleClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
			className={style['modal-backdrop']}
		>
			<Box
				width={'100%'}
				height={'100%'}
				maxHeight={'650px'}
				maxWidth={'600px'}
				borderRadius={{ xs: '0px', sm: '12px' }}
				display={'flex'}
				flexDirection={'column'}
				justifyContent={'space-between'}
				position={'relative'}
				className={'modal'}
			>
				<XIcon height={'30px'} width={'30px'} className={style['x-logo']} />
				<IconButton onClick={handleClose} className={style['close-button']} aria-label='close'>
					<CloseIcon />
				</IconButton>
				<RegisterForm />
			</Box>
		</Modal>
	);
};

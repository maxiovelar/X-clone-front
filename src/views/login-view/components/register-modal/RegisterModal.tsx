import {
	Box,
	Button,
	IconButton,
	Modal,
	TextField,
	Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import style from './RegisterModal.module.scss';
import { XIcon } from '@/common/components/icons';

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
				bgcolor={style.white}
				width={'100%'}
				height={'100%'}
				maxHeight={'650px'}
				maxWidth={'600px'}
				borderRadius={'12px'}
				display={'flex'}
				flexDirection={'column'}
				justifyContent={'space-between'}
				position={'relative'}
				className={style['modal-dialog']}
			>
				<XIcon height={'30px'} width={'30px'} className={style['x-logo']} />
				<IconButton
					onClick={handleClose}
					className={style['close-button']}
					aria-label='close'
				>
					<CloseIcon />
				</IconButton>

				<Box
					display={'flex'}
					flexDirection={'column'}
					padding={'16px 80px 0px'}
					overflow={'scroll'}
					className={style['form-container']}
				>
					<Typography
						id='modal-modal-title'
						variant='h4'
						component='h2'
						fontWeight={'bold'}
						marginBottom={'12px'}
					>
						Crea tu cuenta
					</Typography>

					<TextField
						id='firstname'
						label='First Name'
						type='text'
						margin='normal'
					/>
					<TextField
						id='lastname'
						label='Last Name'
						type='text'
						margin='normal'
					/>
					<TextField
						id='username'
						label='Username'
						type='text'
						margin='normal'
					/>
					<TextField id='email' label='Email' type='email' margin='normal' />
					<TextField
						id='password'
						label='Password'
						type='password'
						margin='normal'
					/>
				</Box>

				<Box display={'flex'} justifyContent={'center'} padding={'20px 80px'}>
					<Button
						variant='contained'
						disableElevation
						className={style['cta-button']}
					>
						Crear cuenta
					</Button>
				</Box>
			</Box>
		</Modal>
	);
};

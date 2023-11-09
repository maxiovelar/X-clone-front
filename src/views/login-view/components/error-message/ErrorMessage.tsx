import { Typography } from '@mui/material';

interface Props {
	children?: string;
}

export const ErrorMessage = ({ children = '' }: Props) => {
	return children !== '' ? (
		<Typography variant='body2' component={'span'} color={'red'} marginBottom={'12px'}>
			{children}
		</Typography>
	) : null;
};

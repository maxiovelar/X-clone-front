import { Button } from '@mui/material';
import style from './ButtonPrimaryPill.module.scss';
import cn from 'classnames';

interface Props {
	variant: 'contained' | 'outlined';
	size?: 'small' | 'medium' | 'large';
	onClick?: () => void;
	disabled?: boolean;
	type?: 'submit' | 'reset' | 'button';
	id?: string;
	children: string;
	className?: string;
}

export const ButtonPrimaryPill = ({ children, ...props }: Props) => {
	return (
		<Button
			{...props}
			className={cn(style['button-pill'], props.className)}
			disableElevation
		>
			{children}
		</Button>
	);
};

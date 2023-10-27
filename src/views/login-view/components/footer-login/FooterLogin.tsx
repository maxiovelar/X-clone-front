import { Stack, Typography, Link as AnchorLink } from '@mui/material';
import links from '@/data/footer-links.json';
import style from './FooterLogin.module.scss';

export const FooterLogin = () => {
	return (
		<Stack
			direction={'row'}
			alignItems={'center'}
			justifyContent={'center'}
			flexWrap={'wrap'}
			marginTop={{ xs: '24px', md: '40px' }}
			padding={{ xs: '16px 8px', md: '14px 12px' }}
		>
			{links.map((link) => (
				<AnchorLink
					href={link.href}
					key={link.text}
					target={'_blank'}
					rel={'noopener noreferrer'}
					variant='caption'
					underline={'none'}
					marginX={'8px'}
					color={style.gray}
				>
					{link.text}
				</AnchorLink>
			))}
			<Typography
				variant='caption'
				display={'block'}
				align={'center'}
				color={style.gray}
			>{`© ${new Date().getFullYear()} X Corp.`}</Typography>
		</Stack>
	);
};

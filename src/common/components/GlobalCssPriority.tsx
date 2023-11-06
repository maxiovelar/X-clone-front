import { type ReactNode } from 'react';
import { StyledEngineProvider, createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: '#1d9bf0',
		},
	},
});

interface Props {
	children: ReactNode;
}
export const GlobalCssPriority = ({ children }: Props) => {
	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</StyledEngineProvider>
	);
};

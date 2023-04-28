import { CssBaseline } from '@mui/material';
// import '../styles/globals.css'

import { ThemeProvider } from '@mui/material/styles';
import theme from '../utils/theme';

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;

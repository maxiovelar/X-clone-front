import { RouterProvider } from 'react-router-dom';
import './App.module.scss';
import { router } from './router';
import { HelmetProvider } from 'react-helmet-async';

function App() {
	return (
		<HelmetProvider>
			<RouterProvider router={router} />
		</HelmetProvider>
	);
}

export default App;

import { Outlet } from 'react-router-dom';

export const Layout = () => {
	return (
		<>
			<h1>Hello X!</h1>
			<Outlet />
		</>
	);
};

import { Navigate, createBrowserRouter } from 'react-router-dom';
import { HomeView, LoginView, ProfileView, TweetView } from '@/views';
import { Layout } from '@/common/components';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ path: '/', element: <HomeView /> },
			{ path: '/:username', element: <ProfileView /> },
			{ path: '/:username/status/:tweetId', element: <TweetView /> },
			{ path: '*', element: <Navigate to='login' /> },
		],
	},
	{ path: 'login', element: <LoginView /> },
	{ path: '*', element: <h1>404 - Not found</h1> },
]);

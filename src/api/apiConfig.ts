import axios from 'axios';

export const apiConfig = axios.create({
	baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
	// headers: {
	// 	Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
	// },
});

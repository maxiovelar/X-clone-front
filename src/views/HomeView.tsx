import { Suspense, useEffect, useState } from 'react';
import { type Tweet } from '../common/interfaces/tweet';
import { apiConfig } from '../api/apiConfig';
import { TweetList } from '@/common/components/TweetList';

export const HomeView = () => {
	const [tweetList, setTweetList] = useState<Tweet[]>([]);
	useEffect(() => {
		const getTweets = async () => {
			const { data } = await apiConfig.get('/tweets');
			console.log(data);
			setTweetList(data);
		};
		getTweets();
	}, []);

	return (
		<>
			<h1>HomeView</h1>
			<Suspense fallback='Loading...'>
				<TweetList tweets={tweetList} />
			</Suspense>
		</>
	);
};

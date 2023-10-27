import { type Tweet } from '@/common/interfaces/tweet';

interface Props {
	tweets: Tweet[];
}

export const TweetList = ({ tweets }: Props) => {
	return (
		<div>
			<ul>
				{tweets.length > 0 &&
					tweets.map((tweet) => (
						<li key={tweet.id}>
							<p>{tweet.content}</p>
						</li>
					))}
			</ul>
		</div>
	);
};

/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import ReactDOM from 'react-dom/client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.scss';
import App from './App';
import { GlobalCssPriority } from './common/components';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GlobalCssPriority>
			<App />
		</GlobalCssPriority>
	</React.StrictMode>
);

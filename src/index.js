import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ConfigProvider } from 'antd';
import 'antd/dist/antd.variable.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
ConfigProvider.config({
	theme: {
		primaryColor: '#DC8900',
		errorColor: '#ff4d4f',
		warningColor: '#faad14',
		successColor: '#52c41a',
		infoColor: '#1890ff',
	},
});
root.render(
	<React.StrictMode>
		<ConfigProvider>
			<App />
		</ConfigProvider>
	</React.StrictMode>
);

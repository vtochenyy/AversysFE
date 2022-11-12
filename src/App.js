import { Button, ConfigProvider } from 'antd';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Button style={{ margin: '20px' }} type='primary'>
				dsd
			</Button>
			<Button style={{ margin: '20px' }} type='default'>
				dsd
			</Button>
			<Button style={{ margin: '20px' }} type='dashed'>
				dsd
			</Button>
			<Button style={{ margin: '20px' }} type='ghost'>
				dsd
			</Button>
		</div>
	);
}

export default App;

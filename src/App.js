import { Button } from 'antd';
import axios from 'axios';
import {
	LineChart,
	PieChart,
	ColumnChart,
	BarChart,
	AreaChart,
	ScatterChart,
} from 'react-chartkick';
import 'chartkick/chart.js';
import './App.css';

function App() {
	return (
		<div className='App'>
			<LineChart
				data={{
					'2021-05-13': 2,
					'2021-05-14': 25,
					'2021-05-15': 100,
					'2021-05-16': 59,
				}}
			/>
			<PieChart
				data={[
					['Blueberry', 44],
					['Strawberry', 23],
					['green', 25],
				]}
			/>
			<ColumnChart
				data={[
					['0.1', 46],
					['0.2', 28],
					['0.3', 45],
					['0.4', 100],
					['0.5', 32],
					['0.6', 200],
				]}
			/>
			<BarChart
				data={[
					['Start-work', 5],
					['middle-work', 100],
					['End-work', 2001],
				]}
				max={2000}
				min={3}
			/>
			<AreaChart
				data={{
					'2021-05-06': 200,
					'2021-05-07': 50,
					'2021-05-08': 5,
					'2021-05-05': 100,
				}}
			/>
			<ScatterChart
				data={[
					[120, 80.0],
					[80, 8.3],
					[125, 23],
					[25, 25],
					[0, 0],
				]}
				xtitle='Subscribes'
				ytitle='Likes'
			/>
			<Button
				onClick={() => {
					axios.post('http://localhost:9876/users/register', {
						firstName: 'Test',
						lastName: 'UUID',
						login: 'Stytlaya sobaka',
						password: 'qwerty431443nlnf',
						age: 24,
					});
				}}
				style={{ margin: '20px' }}
				type='primary'
			>
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

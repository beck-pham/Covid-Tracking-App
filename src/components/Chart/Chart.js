import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line } from 'react-chartjs-2';

import './chart.scss';

const Chart = () => {
	const [dailyData, setDailyData] = useState([]); // useState to set initial empty state

	useEffect(() => {
		//accept a callback function
		const fetchAPI = async () => {
			setDailyData(await fetchDailyData()); //set state to function fetchDailyData for defined data (confirmed, recovered, deaths, lastUpdate)
		};
		// console.log(dailyData);

		fetchAPI();
	});

	// make use of linechart of dailyData from api array data on a "Global" scale
	const lineChart = dailyData.length ? (
		<Line
			data={{
				labels: dailyData.map(({ date }) => date),
				datasets: [
					{
						data: dailyData.map(({ confirmed }) => confirmed),
						labels: 'Infected',
						borderColor: '#3333ff',
						fill: true,
					},
					{
						data: dailyData.map(({ deaths }) => deaths),
						labels: 'Deaths',
						borderColor: 'red',
						backgroundColor: 'rgba(255, 0, 0, 0.5)',
						fill: true,
					},
				],
			}}
		/>
	) : null;

	return <div className='chart-container'>{lineChart}</div>;
};

export default Chart;

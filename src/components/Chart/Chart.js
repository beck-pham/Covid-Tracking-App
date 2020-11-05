import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import './chart.scss';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
	const [dailyData, setDailyData] = useState([]); // useState to set initial empty state

	useEffect(() => {
		//accept a callback function
		const fetchAPI = async () => {
			setDailyData(await fetchDailyData()); //set state to function fetchDailyData for defined data (confirmed, recovered, deaths, lastUpdate)
		};
		// console.log(dailyData);

		fetchAPI();
	}, []); // empty array make useEffect() render once

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
	// make use of bar chart of individual country
	const barChart = confirmed ? (
		<Bar
			data={{
				labels: ['Infected', 'Recovered', 'Deaths'],
				datasets: [
					{
						label: 'People',
						barThickness: 100,
						hoverBackgroundColor: false,
						backgroundColor: [
							'rgba(0, 0, 255, 0.5',
							'rgba(0, 255, 0, 0.5',
							'rgba(255, 0, 0, 0.5',
						],
						data: [confirmed.value, recovered.value, deaths.value],
					},
				],
			}}
			options={{
				legend: { display: true },
				title: { display: true, text: `Current state in ${country}` },
			}}
		/>
	) : null;

	return (
		<div className='chart-container'>{country ? barChart : lineChart}</div>
	);
};

export default Chart;

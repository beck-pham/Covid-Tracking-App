import React from 'react';
import { Grid } from '@material-ui/core';
import CardItem from './Card-item';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
	if (!confirmed) {
		return 'Loading...';
	}

	return (
		<div className='container'>
			<Grid container spacing={3} justify='center'>
				<CardItem
					className='Infected'
					cardTitle='Infected'
					value={confirmed.value}
					date={new Date(lastUpdate).toDateString()}
					cardSubtitle='Number of Active Cases from COVID-19'
				/>
				<CardItem
					className='Recovered'
					cardTitle='Recovered'
					value={recovered.value}
					date={new Date(lastUpdate).toDateString()}
					cardSubtitle='Number of Active Cases from COVID-19'
				/>
				<CardItem
					className='Deaths'
					cardTitle='Deaths'
					value={deaths.value}
					date={new Date(lastUpdate).toDateString()}
					cardSubtitle='Number of Active Cases from COVID-19'
				/>
			</Grid>
		</div>
	);
};
export default Cards;

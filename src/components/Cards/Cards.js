import React from 'react';
import { Grid } from '@material-ui/core';
import CardItem from './Card-Item/Card-item';

import './cards.scss';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
	if (!confirmed) {
		return 'Loading...';
	}

	return (
		<div className='container'>
			<Grid container spacing={3} justify='center'>
				<CardItem
					className='infected'
					style={{ backgroundColor: 'red' }}
					cardTitle='Infected'
					value={confirmed.value}
					date={new Date(lastUpdate).toDateString()}
					cardSubtitle='Number of Active Cases from COVID-19'
				/>
				<CardItem
					className='recovered'
					cardTitle='Recovered'
					value={recovered.value}
					date={new Date(lastUpdate).toDateString()}
					cardSubtitle='Number of Active Cases from COVID-19'
				/>
				<CardItem
					className='deaths'
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

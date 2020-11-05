import React from 'react';

import { CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

const CardItem = ({ cardTitle, value, date, cardSubtitle, className }) => (
	<Grid item xs={12} md={3} className={className}>
		<CardContent>
			<Typography color='textSecondary' gutterBottom>
				{cardTitle}
			</Typography>
			<Typography variant='h5' component='h2'>
				<CountUp start={0} end={value} duration={2.75} separator=',' />
			</Typography>
			<Typography color='textSecondary'>
				{new Date(date).toDateString()}
			</Typography>
			<Typography variant='body2' component='p'>
				{cardSubtitle}
			</Typography>
		</CardContent>
	</Grid>
);

export default CardItem;

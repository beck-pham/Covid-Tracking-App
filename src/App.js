import React from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';

import { fetchData } from './api';
import coronaImage from './images/image.png';

import './App.scss';

class App extends React.Component {
	state = {
		data: {},
		country: '',
	};
	k;

	async componentDidMount() {
		const data = await fetchData();
		this.setState({ data: data });
	}

	handleCountryChange = async (country) => {
		const fetchedData = await fetchData(country);

		this.setState({ data: fetchedData, country: country });

		// set the state
	};

	render() {
		const { data, country } = this.state;

		return (
			<div className='container'>
				<img src={coronaImage} className='image' alt='Covid-19' />
				<Cards data={data} />
				{/* Set handleCountryChange function as props for use */}
				<CountryPicker handleCountryChange={this.handleCountryChange} />
				<Chart data={data} country={country} />
			</div>
		);
	}
}

export default App;

import React from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';

import { fetchData } from './api';

import './App.scss';

class App extends React.Component {
	state = {
		data: {},
		country: '',
	};

	async componentDidMount() {
		const data = await fetchData();
		this.setState({ data: data });
	}

	handleCountryChange = async (country) => {
		console.log(country);
		// fetch the data
		// set the state
	};

	render() {
		const { data } = this.state;

		return (
			<div className='container'>
				<Cards data={data} />
				<CountryPicker handleCountryChange={this.handleCountryChange} />
				<Chart />
			</div>
		);
	}
}

export default App;

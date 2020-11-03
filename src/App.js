import React from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';

import { fetchData } from './api';

import './App.scss';

class App extends React.Component {
	state = {
		data: {},
	};

	async componentDidMount() {
		const data = await fetchData();
		this.setState({ data: data });
	}

	render() {
		const { data } = this.state;

		return (
			<div className='container'>
				<Cards data={data} />
				<Chart />
				<CountryPicker />
			</div>
		);
	}
}

export default App;

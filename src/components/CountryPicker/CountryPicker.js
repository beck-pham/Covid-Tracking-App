import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api';

import './countryPicker.scss';

const CountryPicker = ({ handleCountryChange }) => {
	const [fetchedCountries, setFetchedCountries] = useState([]); // useState to set initial empty state

	useEffect(() => {
		const fetchAPI = async () => {
			setFetchedCountries(await fetchCountries()); //set state to function setFetchedCountries for all countries
		};

		fetchAPI();
	}, [setFetchedCountries]); // useEffect only changes when 'setFetchedCountries' changes

	console.log(fetchedCountries);
	return (
		<FormControl className='formControl' style={{ marginBottom: '20px' }}>
			<NativeSelect
				defaultValue=''
				onChange={(event) => handleCountryChange(event.target.value)}
			>
				{/* value set as empty initially because there is no country is chosen */}
				<option value=''>Global</option>
				{/* Populated all countries using map method */}
				{fetchedCountries.map((country, id) => (
					<option key={id} value={country}>
						{country}
					</option>
				))}
			</NativeSelect>
		</FormControl>
	);
};
export default CountryPicker;

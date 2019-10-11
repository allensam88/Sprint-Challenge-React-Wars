import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css';
import CharacterCard from './CharacterCard';

const CharacterList = () => {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		axios.get(`https://swapi.co/api/people/`)
			.then(response => {
				setCharacters(response.data.results);
			})
			.catch(error => {
				console.log(error);
			});

	}, []);

	return (
		<div>
			<h1>This is the CharacterList component</h1>

			{characters.map((character, index) => {
				return <CharacterCard key={index} character={character} />
			})}
		</div>
	)
}

export default CharacterList;
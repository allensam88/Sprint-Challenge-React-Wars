import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css';
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

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

const StyledCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

	return (
		<div>
			<h1>Star Wars ID Cards</h1>
      <StyledCardContainer>
			  {characters.map((character, index) => {
				  return <CharacterCard key={index} character={character} />
        })}
      </StyledCardContainer>
		</div>
	)
}

export default CharacterList;
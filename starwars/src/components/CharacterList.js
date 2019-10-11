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
const StyledHeader = styled.h1`
  color: #F9E60A;
  padding: 25px;
  text-align: center;
  background-color: black;
`;

	return (
		<div>
      <StyledHeader>
        <h1>STAR WARS ID CARDS</h1>
        <h3>May the Force be with you...</h3>
      </StyledHeader>
      <StyledCardContainer>
			  {characters.map((character, index) => {
				  return <CharacterCard key={index} character={character} />
        })}
      </StyledCardContainer>
		</div>
	)
}

export default CharacterList;
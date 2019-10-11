import React from 'react';
import '../index.css';

const CharacterCard = props => {
	return (
		<div>
			<h2>{props.character.name}</h2>
		</div>
	)
}

export default CharacterCard;
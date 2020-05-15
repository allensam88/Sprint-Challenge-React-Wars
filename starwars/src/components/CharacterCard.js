import React from 'react';
import '../index.css';
import { Container, Row, Col, Card, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

const CharacterCard = props => {
	return (
    
    <Col xs='6'>
      <Row>
      <Card body style={{ backgroundColor: '#D9DE8E', borderColor: '#333', margin: '10%', padding: '10px' }}>
        <CardBody>
          <CardTitle tag='h1' style={{ color: '#B02221', textAlign: 'center', fontStyle: 'italic', backgroundColor: '#10193A', padding: '10px', border: '1px solid black', borderRadius: '25px'}}>{props.character.name}</CardTitle>
          <CardSubtitle tag='h4' style={{margin: '10px 0', padding: '10px 5px', textAlign: 'center', border: '1px solid black', color: '#10193A', backgroundColor: '#B02221'}}>Biometric Statistics</CardSubtitle>
          <CardText style={{ lineHeight: '8px', padding: '15px', border: '1px solid black', backgroundColor: '#10193A', color: '#B02221', fontWeight: 'bold'}}>
            <p>Height (cm): {props.character.height}</p>
            <p>Weight (kg): {props.character.mass}</p>
            <p>Hair: {props.character.hair_color}</p>
            <p>Eyes: {props.character.eye_color}</p>
            <p>Birth Year: {props.character.birth_year}</p>
            <p>Gender: {props.character.gender}</p>
          </CardText>
        </CardBody>
      </Card>
      </Row>
    </Col>
    
	)
}

export default CharacterCard;
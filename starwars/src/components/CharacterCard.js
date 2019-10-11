import React from 'react';
import '../index.css';
import { Container, Row, Col, Card, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

const CharacterCard = props => {
	return (
    
    <Col xs='6'>
      <Row>
      <Card body style={{ color: 'white', backgroundColor: 'blue', borderColor: '#333', margin: '5%' }}>
        <CardBody>
          <CardTitle tag='h1' style={{fontStyle: 'italic'}}>{props.character.name}</CardTitle>
          <CardSubtitle tag='h3' style={{padding: '20px 0', textDecoration: 'underline'}}>Biometrics</CardSubtitle>
          <CardText style={{ lineHeight: '8px'}}>
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
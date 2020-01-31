import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

export default function CharacterCard(props) {
  return (
    <div className="character-card">
      <Card >
        <CardImg width="100%" src={props.image} alt="Card image"/>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardText>Status: {props.status}</CardText>
          <CardText>Species: {props.species}</CardText>
          <CardText>Gender: {props.gender}</CardText>
        </CardBody>
      </Card>
    </div>
    );
}
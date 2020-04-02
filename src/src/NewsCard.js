import React from 'react';
import Card from 'react-bootstrap/Card';
import { greenColorCode } from './Constants';

function NewsCard(props) {
  const cardStyle = { border: `1px solid ${greenColorCode}` };
  return (
    <Card style={cardStyle}>
      <Card.Header>{props.Date}</Card.Header>
      <Card.Img variant="top" src={props.Media}/>
      <Card.Body>
        <Card.Title style={{ color: greenColorCode }}>{props.Headline}</Card.Title>
        <Card.Text>
          {props.Text}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Link href={props.URL}>More Info</Card.Link>
      </Card.Footer>
    </Card>
  );
}

export default NewsCard;

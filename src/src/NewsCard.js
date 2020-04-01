import React from 'react';
import Card from 'react-bootstrap/Card';

function NewsCard(props) {
  const cardStyle = { border: "1px solid #376551" };
  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={props.Media}/>
      <Card.Body>
        <Card.Title style={{color: "#376551"}}>{props.Headline}</Card.Title>
        <Card.Text>
          {props.Text} ({props.Date})
        </Card.Text>
        <Card.Link href={props.URL}>More Info</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default NewsCard;

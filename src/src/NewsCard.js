import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Title from './Title'

function NewsCard(props) {
  const cardStyle = { width: '18rem' }
  return (
    <div>
      <Card style={cardStyle} >
        <Card.Img style={{width: "100px"}} variant="top" src={props.Media}/>
        <Card.Body>
          <Card.Title>{props.Headline}</Card.Title>
          <Card.Text>
            {props.Text}
          </Card.Text>
          <Card.Link href={props.URL}>More Info</Card.Link>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{props.Date}</small>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default NewsCard;

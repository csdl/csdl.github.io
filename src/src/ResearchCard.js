import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { greenColorCode } from './Constants';

function ResearchCard(props) {
  const cardStyle = { border: `1px solid ${greenColorCode}` };
  const buttonStyle = { backgroundColor: greenColorCode, borderColor: greenColorCode };
  return (
    <Card style={cardStyle}>
      <Card.Header>{props.date}</Card.Header>
      <Card.Body>
        <img alt='Media' style={{ marginRight: '15px' }} className={'rounded float-left'} width='100px' src={props.media}/>
        <Card.Title style={{ color: greenColorCode }}>{props.project}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        {props.showLess ?
          <Button style={ buttonStyle } onClick={() => props.showOneCard(null)}>Show less...</Button> :
          <Button style={ buttonStyle } onClick={() => props.showOneCard(props.project)}>Show more...</Button>
        }
      </Card.Footer>
    </Card>
  );
}

ResearchCard.propTypes = {
  date: PropTypes.string.isRequired,
  media: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  showOneCard: PropTypes.func.isRequired,
  showLess: PropTypes.bool.isRequired,
};

export default ResearchCard;

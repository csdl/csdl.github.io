import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { greenColorCode } from './Constants';

function ResearchCard(props) {
  const cardStyle = { border: `1px solid ${greenColorCode}` };
  return (
    <Card style={cardStyle}>
      <Card.Header>{props.Date}</Card.Header>
      <Card.Body>
        <img alt='Media' style={{ marginRight: '15px' }} className={'rounded float-left'} width='100px' src={props.Media}/>
        <Card.Title style={{ color: greenColorCode }}>{props.Headline}</Card.Title>
        <Card.Text>
          {props.Text}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Link className={'stretched-link'} href={props.URL}>More...</Card.Link>
      </Card.Footer>
    </Card>
  );
}

ResearchCard.propTypes = {
  Date: PropTypes.string.isRequired,
  Media: PropTypes.string.isRequired,
  Headline: PropTypes.string.isRequired,
  Text: PropTypes.string.isRequired,
  URL: PropTypes.string.isRequired,
};

export default ResearchCard;

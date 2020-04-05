import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { greenColorCode } from './Constants';

function boxArrowUpRight() {
  return (
    <svg className="bi bi-box-arrow-up-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
         xmlns="http://www.w3.org/2000/svg" style={{ paddingBottom: '3px' }}>
      <path fillRule="evenodd"
            d="M1.5 13A1.5 1.5 0 003 14.5h8a1.5 1.5 0 001.5-1.5V9a.5.5 0 00-1 0v4a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5h4a.5.5 0 000-1H3A1.5 1.5 0 001.5 5v8zm7-11a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V2.5H9a.5.5 0 01-.5-.5z"
            clipRule="evenodd"/>
      <path fillRule="evenodd" d="M14.354 1.646a.5.5 0 010 .708l-8 8a.5.5 0 01-.708-.708l8-8a.5.5 0 01.708 0z"
            clipRule="evenodd"/>
    </svg>
  );
}

function NewsCard(props) {
  const cardStyle = { border: `1px solid ${greenColorCode}` };
  return (
    <Card style={cardStyle}>
      <Card.Header>{props.Date} </Card.Header>
      <Card.Body>
        <img alt='Media' style={{ marginRight: '15px' }} className={'rounded float-left'} width='100px' src={props.Media}/>
        <Card.Title style={{ color: greenColorCode }}>{props.Headline}</Card.Title>
        <Card.Text>

          {props.Text}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Link className={'stretched-link'} href={props.URL}>More Info {boxArrowUpRight()}</Card.Link>
      </Card.Footer>
    </Card>
  );
}

NewsCard.propTypes = {
  Date: PropTypes.string.isRequired,
  Media: PropTypes.string.isRequired,
  Headline: PropTypes.string.isRequired,
  Text: PropTypes.string.isRequired,
  URL: PropTypes.string.isRequired,
};

export default NewsCard;

import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { greenColorCode } from './Constants';

const cardStyle = { border: `1px solid ${greenColorCode}` };
const buttonStyle = { backgroundColor: greenColorCode, borderColor: greenColorCode };

function smallCard(date, media, project, text, showLess, showOneCard) {
  return (
    <Card style={cardStyle}>
      <Card.Header>{date}</Card.Header>
      <Card.Body>
        <img alt='Media' style={{ marginRight: '15px' }} className={'rounded float-left'} width='100px' src={media}/>
        <Card.Title style={{ color: greenColorCode }}>{project}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button style={buttonStyle} onClick={() => showOneCard(project)}>Show more...</Button>
      </Card.Footer>
    </Card>
  );
}

function bigCard(date, project, bigImage, longText, moreInfo, showOneCard) {
  console.log(bigImage);
  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={ bigImage }/>
      <Card.Header>{date}</Card.Header>
      <Card.Body>
        <Card.Title style={{ color: greenColorCode }}>{project}</Card.Title>
        <Card.Text>
          {longText}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button style={buttonStyle} onClick={() => showOneCard(null)}>Show less...</Button>
      </Card.Footer>
    </Card>
  );
}

function ResearchCard(props) {
  const { date, media, project, text, url, showOneCard, showLess, bigImage, longText, moreInfo } = props;
  return (
    showLess ?
      bigCard(date, project, bigImage, longText, moreInfo, showOneCard) :
      smallCard(date, media, project, text, url, showOneCard, showLess)
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
  bigImage: PropTypes.string,
  longText: PropTypes.string,
  moreInfo: PropTypes.string,
};

export default ResearchCard;

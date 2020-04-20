import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Markdown from 'react-markdown';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { greenColorCode } from './Constants';


const cardStyle = { border: `1px solid ${greenColorCode}` };
const buttonStyle = { backgroundColor: greenColorCode, borderColor: greenColorCode };
const dollar = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', notation: "compact" });

function smallCard(date, sponsor, text, logo, grants, longText, showOneCard) {
  const total = dollar.format(_.reduce(grants, (sum, n) => sum + n, 0));
  return (
    <Card style={cardStyle}>
      <Card.Header>
        <Row>
          <Col>{date}</Col>
          <Col style={{ textAlign: 'right' }}>{total}</Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <img alt='Media' style={{ marginRight: '15px' }} className={'rounded float-left'} width='100px' src={logo}/>
        <Card.Title style={{ color: greenColorCode }}>{sponsor}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button style={buttonStyle} onClick={() => showOneCard(sponsor)}>Show more...</Button>
      </Card.Footer>
    </Card>
  );
}

function bigCard(date, sponsor, text, logo, grants, longText, showOneCard) {
  const total = dollar.format(_.reduce(grants, (sum, n) => sum + n, 0));
  return (
    <Card style={cardStyle}>
      <Card.Body>
        <Card.Title style={{ color: greenColorCode }}>{sponsor} ({date}, {total})</Card.Title>
        <Card.Text as='div'>
          <Markdown source={longText}/>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button style={buttonStyle} onClick={() => showOneCard(null)}>Show less...</Button>
      </Card.Footer>
    </Card>
  );
}

function SponsorCard(props) {
  const { date, sponsor, text, logo, showOneCard, showLess, grants, longText } = props;
  return (
    showLess ?
      bigCard(date, sponsor, text, logo, grants, longText, showOneCard) :
      smallCard(date, sponsor, text, logo, grants, longText, showOneCard, showLess)
  );
}

SponsorCard.propTypes = {
  date: PropTypes.string.isRequired,
  sponsor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  grants: PropTypes.array.isRequired,
  longText: PropTypes.string,
};

export default SponsorCard;

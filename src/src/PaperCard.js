import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import { greenColorCode } from './Constants';

const formatTechReport = entry => `${entry.authors.join(', ')},  **${entry.title}**, Technical Report ${entry.number}, ${entry.month} ${entry.year}, ${entry.institution} ${(entry.note) ? `([pdf](${entry.note}))` : ''}`;

function PaperCard(props) {
  const cardStyle = { border: `1px solid ${greenColorCode}`, marginBottom: '10px' };
  return (
    <Accordion>
      <Card style={cardStyle}>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <Markdown>
            {formatTechReport(props.entry)}
          </Markdown>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body><Markdown>{`Abstract: ${props.entry.abstract}`}</Markdown></Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

PaperCard.propTypes = {
  entry: PropTypes.object.isRequired,
};

export default PaperCard;

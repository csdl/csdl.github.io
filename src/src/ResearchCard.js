import React from 'react';
import YouTube from 'react-youtube-embed';
import Card from 'react-bootstrap/Card';
import Markdown from 'react-markdown';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import _ from 'lodash';
import TechReports from './TechReports';
import { greenColorCode } from './Constants';
import PaperCard from './PaperCard';

const cardStyle = { border: `1px solid ${greenColorCode}` };
const buttonStyle = { backgroundColor: greenColorCode, borderColor: greenColorCode };
const techReports = new TechReports();

/**
 * Show only a summary of the Research project.
 */
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

/**
 * If the user selects "Show more", then show them more.
 */
function bigCard(date, project, keyword, bigImage, longText, showOneCard, videoId) {
  const paperKeys = techReports.getKeysByKeyword(keyword);
  const entries = (paperKeys) ? techReports.getSortedEntries(_.map(paperKeys, key => techReports.getEntry(key))) : [];
  return (
    <Card style={cardStyle}>
      {videoId && <YouTube id={videoId}/>}
      {bigImage && <Card.Img variant="top" src={bigImage}/>}
      <Card.Body>
        <Card.Title style={{ color: greenColorCode }}>{project} ({date})</Card.Title>
        <Card.Text as='div'>
          <Markdown source={longText}/>
          {(entries.length > 0) && <Markdown source='##### Publications'/>}
          {(entries.length > 0) && _.map(entries, (entry, idx) => <PaperCard key={idx} entry={entry}/>)}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button style={buttonStyle} onClick={() => showOneCard(null)}>Show less...</Button>
      </Card.Footer>
    </Card>
  );
}

function ResearchCard(props) {
  const { date, media, project, keyword, text, url, showOneCard, showLess, bigImage, longText, videoId } = props;
  return (
    showLess ?
      bigCard(date, project, keyword, bigImage, longText, showOneCard, videoId) :
      smallCard(date, media, project, text, url, showOneCard, showLess)
  );
}

ResearchCard.propTypes = {
  date: PropTypes.string.isRequired,
  media: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  keyword: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  showOneCard: PropTypes.func.isRequired,
  showLess: PropTypes.bool.isRequired,
  bigImage: PropTypes.string,
  longText: PropTypes.string,
  videoId: PropTypes.string,
};

export default ResearchCard;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Title from './Title';
import SectionToggle from './SectionToggle';
import getResearchData from './data/ResearchData';
import ResearchCard from './ResearchCard';

function Research(props) {
    const researchData = getResearchData();
    const totalDecks = Math.trunc(researchData.length / 3);
    const [numDecks, setNumDecks] = useState(1);
    const [showOneCard, setShowOneCard] = useState(null);

  const showThisCard = (project) => {
    setShowOneCard(project);
  };

  // eslint-disable-next-line react/prop-types
  const renderResearchCard = ({ date, project, keyword, text, url, media, bigImage, longText, moreInfo, videoId }, key) => (
    <ResearchCard
      key={key} date={date} project={project} keyword={keyword} text={text} url={url} media={media}
      bigImage={bigImage} longText={longText} moreInfo={moreInfo} videoId={videoId}
      showOneCard={showThisCard} showLess={!!showOneCard}/>
  );

  const onClickSectionButton = (pushedButton) => {
    if (pushedButton === 'recent') {
      setNumDecks(1);
    } else
      if (pushedButton === 'all') {
        setNumDecks(totalDecks);
      }
  };

  const renderDeck = (deckNum) => {
    const deckStyle = { marginBottom: '1em' };
    return (
      <CardDeck key={deckNum} style={deckStyle}>
        {[
          renderResearchCard(researchData[(deckNum * 3)], (deckNum * 3)),
          renderResearchCard(researchData[(deckNum * 3) + 1], (deckNum * 3) + 1),
          renderResearchCard(researchData[(deckNum * 3) + 2], (deckNum * 3) + 2),
        ]}
      </CardDeck>
    );
  };

  const renderDecks = () => {
    const decks = [];
    for (let i = 0; i < numDecks; i++) {
      decks.push(renderDeck(i));
    }
    return (
      <div>
        <SectionToggle onClick={onClickSectionButton} total={researchData.length}/>
        {decks}
      </div>
    );
  };

  const renderOneCard = (project) => {
    const cardData = researchData.find((data) => data.project === project);
    return renderResearchCard(cardData, 1);
  };

  return (
    <div style={props.sectionStyle} id="research">
      <Container>
        <Title title={'Research'}/>
        {showOneCard ? renderOneCard(showOneCard) : renderDecks()}
      </Container>
    </div>
  );
}

Research.propTypes = {
  sectionStyle: PropTypes.object.isRequired,
};

export default Research;

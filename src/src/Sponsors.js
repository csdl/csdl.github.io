import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Title from './Title';
import SectionToggle from './SectionToggle';
import getSponsorData from './data/SponsorData';
import SponsorCard from './SponsorCard';

function Sponsors(props) {
  const sponsorData = getSponsorData();
  const totalDecks = Math.trunc(sponsorData.length / 3);
  const [numDecks, setNumDecks] = useState(1);
  const [showOneCard, setShowOneCard] = useState(null);

  const showThisCard = (project) => {
    setShowOneCard(project);
  };

  // eslint-disable-next-line react/prop-types
  const renderSponsorCard = ({ date, sponsor, text, logo, grants, longText }, key) => (
    <SponsorCard
      key={key} date={date} sponsor={sponsor} text={text} logo={logo} grants={grants} longText={longText}
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
          renderSponsorCard(sponsorData[(deckNum * 3)], (deckNum * 3)),
          renderSponsorCard(sponsorData[(deckNum * 3) + 1], (deckNum * 3) + 1),
          renderSponsorCard(sponsorData[(deckNum * 3) + 2], (deckNum * 3) + 2),
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
        <SectionToggle onClick={onClickSectionButton} total={sponsorData.length}/>
        {decks}
      </div>
    );
  };

  const renderOneCard = (sponsor) => {
    const cardData = sponsorData.find((data) => data.sponsor === sponsor);
    return renderSponsorCard(cardData, 1);
  };

  return (
    <div style={props.sectionStyle} id="sponsors">
      <Container>
        <Title title={'Sponsors'}/>
        {showOneCard ? renderOneCard(showOneCard) : renderDecks()}
      </Container>
    </div>
  );
}

Sponsors.propTypes = {
  sectionStyle: PropTypes.object.isRequired,
};

export default Sponsors;

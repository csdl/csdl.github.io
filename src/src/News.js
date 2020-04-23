import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Title from './Title';
import getNewsData from './data/NewsData';
import NewsCard from './NewsCard';
import SectionToggle from './SectionToggle';

function News(props) {
  const newsData = getNewsData();
  const totalDecks = Math.trunc(newsData.length / 3);
  const [numDecks, setNumDecks] = useState(1);

  const onClickSectionButton = (pushedButton) => {
    if (pushedButton === 'recent') {
      setNumDecks(1);
    } else
      if (pushedButton === 'all') {
        setNumDecks(totalDecks);
      }
  };

  const renderNewsCard = (data, idx) => (
    <NewsCard key={idx} Date={data.Date} Headline={data.Headline} Text={data.Text} URL={data.URL} Media={data.Media}/>
  );

  const renderDeck = (deckNum) => {
    const deckStyle = { marginBottom: '1em' };
    return (
      <CardDeck key={deckNum} style={deckStyle}>
        {[
          renderNewsCard(newsData[(deckNum * 3)], (deckNum * 3)),
          renderNewsCard(newsData[(deckNum * 3) + 1], (deckNum * 3) + 1),
          renderNewsCard(newsData[(deckNum * 3) + 2], (deckNum * 3) + 2),
        ]}
      </CardDeck>
    );
  };

  const renderDecks = () => {
    const decks = [];
    for (let i = 0; i < numDecks; i++) {
      decks.push(renderDeck(i));
    }
    return decks;
  };

  return (
    <div style={props.sectionStyle} id="news">
      <Container>
        <Title title={'News'}/>
        <SectionToggle onClick={onClickSectionButton} total={newsData.length}/>
        {renderDecks()}
      </Container>
    </div>
  );
}

News.propTypes = {
  sectionStyle: PropTypes.object.isRequired,
};

export default News;

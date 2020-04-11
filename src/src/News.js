import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Title from './Title';
import getNewsData from './data/NewsData';
import NewsCard from './NewsCard';
import SectionButtons from './SectionButtons';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.newsData = getNewsData();
    this.totalDecks = Math.trunc(this.newsData.length / 3);
    this.state = { numDecks: 1 };
  }

  onClickSectionButton = (pushedButton) => {
    if (pushedButton === 'recent') {
      this.setState({ numDecks: 1 });
    } else
      if (pushedButton === 'all') {
        this.setState({ numDecks: this.totalDecks });
      }
  }

  renderDecks = () => {
    const decks = [];
    for (let i = 0; i < this.state.numDecks; i++) {
      decks.push(this.renderDeck(i));
    }
    return decks;
  }

  renderDeck = (deckNum) => {
    const deckStyle = { marginBottom: '1em' };
    return (
      <CardDeck key={deckNum} style={deckStyle}>
        {[
          this.renderNewsCard(this.newsData[(deckNum * 3)], (deckNum * 3)),
          this.renderNewsCard(this.newsData[(deckNum * 3) + 1], (deckNum * 3) + 1),
          this.renderNewsCard(this.newsData[(deckNum * 3) + 2], (deckNum * 3) + 2),
        ]}
      </CardDeck>
    );
  }

  renderNewsCard = (data, idx) => (
    <NewsCard key={idx} Date={data.Date} Headline={data.Headline} Text={data.Text} URL={data.URL} Media={data.Media}/>
  );


  render = () => (
    <div style={this.props.sectionStyle} id="home">
      <Container>
        <Title title={'News'}/>
        <SectionButtons onClick={this.onClickSectionButton} total={this.newsData.length}/>
        {this.renderDecks()}
      </Container>
    </div>
  );
}

News.propTypes = {
  sectionStyle: PropTypes.object.isRequired,
};

export default News;

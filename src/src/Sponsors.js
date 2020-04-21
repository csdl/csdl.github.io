import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Title from './Title';
import SectionToggle from './SectionToggle';
import getSponsorData from './data/SponsorData';
import SponsorCard from './SponsorCard';

class Sponsors extends React.Component {
  constructor(props) {
    super(props);
    this.SponsorData = getSponsorData();
    this.totalDecks = Math.trunc(this.SponsorData.length / 3);
    this.state = { numDecks: 1, showOneCard: null };
  }

  showOneCard = (project) => {
    this.setState({ showOneCard: project });
  };

  renderSponsorCard = ({ date, sponsor, text, logo, grants, longText }, key) => (
    <SponsorCard
      key={key} date={date} sponsor={sponsor} text={text} logo={logo} grants={grants} longText={longText}
      showOneCard={this.showOneCard} showLess={!!this.state.showOneCard}/>
  );

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
    return (
      <div>
        <SectionToggle onClick={this.onClickSectionButton} total={this.SponsorData.length}/>
        {decks}
      </div>
    );
  }

  renderDeck = (deckNum) => {
    const deckStyle = { marginBottom: '1em' };
    return (
      <CardDeck key={deckNum} style={deckStyle}>
        {[
          this.renderSponsorCard(this.SponsorData[(deckNum * 3)], (deckNum * 3)),
          this.renderSponsorCard(this.SponsorData[(deckNum * 3) + 1], (deckNum * 3) + 1),
          this.renderSponsorCard(this.SponsorData[(deckNum * 3) + 2], (deckNum * 3) + 2),
        ]}
      </CardDeck>
    );
  }

  renderOneCard = (sponsor) => {
    const cardData = this.SponsorData.find((data) => data.sponsor === sponsor);
    return this.renderSponsorCard(cardData, 1);
  }

  render = () => (
    <div style={this.props.sectionStyle} id="sponsors">
      <Container>
        <Title title={'Sponsors'}/>
        {this.state.showOneCard ? this.renderOneCard(this.state.showOneCard) : this.renderDecks()}
      </Container>
    </div>
  );
}

Sponsors.propTypes = {
  sectionStyle: PropTypes.object.isRequired,
};

export default Sponsors;

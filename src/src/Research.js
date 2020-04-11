import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Title from './Title';
import SectionButtons from './SectionButtons';
import getResearchData from './data/ResearchData';
import ResearchCard from './ResearchCard';

class Research extends React.Component {
  constructor(props) {
    super(props);
    const researchData = getResearchData();
    this.totalDecks = Math.trunc(researchData.length / 3);
    const numDecks = 1;
    const showOneCard = null;
    this.state = {
      researchData,
      numDecks,
      showOneCard,
    };
  }

  showOneCard = (project) => {
    this.setState({ showOneCard: project });
  };

  renderResearchCard = ({ date, project, text, url, media, bigImage, longText, moreInfo }, key) => (
    <ResearchCard
      key={key} date={date} project={project} text={text} url={url} media={media}
      bigImage={bigImage} longText={longText} moreInfo={moreInfo}
      showOneCard={this.showOneCard} showLess={!!this.state.showOneCard}/>
  );

  onClickSectionButton = (buttonName) => {
    if (buttonName === 'recent') {
      this.setState({ numDecks: 1 });
    } else
      if (buttonName === 'all') {
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
        <SectionButtons onClick={this.onClickSectionButton} total={this.state.researchData.length}/>
        {decks}
      </div>
    );
  }

  renderDeck = (deckNum) => {
    const deckStyle = { marginBottom: '1em' };
    return (
      <CardDeck key={deckNum} style={deckStyle}>
        {[
          this.renderResearchCard(this.state.researchData[(deckNum * 3)], (deckNum * 3)),
          this.renderResearchCard(this.state.researchData[(deckNum * 3) + 1], (deckNum * 3) + 1),
          this.renderResearchCard(this.state.researchData[(deckNum * 3) + 2], (deckNum * 3) + 2),
        ]}
      </CardDeck>
    );
  }

  renderOneCard = (project) => {
    const cardData = this.state.researchData.find((data) => data.project === project);
    return this.renderResearchCard(cardData, 1);
  }

  render = () => (
    <div style={this.props.sectionStyle} id="home">
      <Container>
        <Title title={'Research'}/>
        {this.state.showOneCard ? this.renderOneCard(this.state.showOneCard) : this.renderDecks()}
      </Container>
    </div>
  );
}

Research.propTypes = {
  sectionStyle: PropTypes.object.isRequired,
};

export default Research;

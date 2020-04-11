import React from 'react';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Title from './Title';
import getResearchData from './data/ResearchData';
import ResearchCard from './ResearchCard';
import { greenColorCode } from './Constants';

class Research extends React.Component {
  constructor(props) {
    super(props);
    const buttonStyle = { backgroundColor: greenColorCode, margin: '1em', borderColor: greenColorCode };
    const selectedStyle = { ...buttonStyle, fontWeight: 'bold' };
    const deselectedStyle = { ...buttonStyle, fontWeight: 'normal' };
    const researchData = getResearchData();
    const latestStyle = selectedStyle;
    const recentStyle = deselectedStyle;
    const allStyle = deselectedStyle;
    const numDecks = 1;
    const showOneCard = null;
    this.state = {
      selectedStyle,
      deselectedStyle,
      researchData,
      numDecks,
      latestStyle,
      recentStyle,
      allStyle,
      showOneCard,
    };
  }

  showOneCard = (project) => {
    this.setState({ showOneCard: project });
  };

  renderResearchCard({ date, project, text, url, media, bigImage, longText, moreInfo }, key) {
    return <ResearchCard key={key} date={date} project={project} text={text} url={url} media={media}
                         bigImage={bigImage} longText={longText} moreInfo={moreInfo}
                         showOneCard={this.showOneCard} showLess={!!this.state.showOneCard}/>;
  }

  onClick(buttonName) {
    const on = this.state.selectedStyle;
    const off = this.state.deselectedStyle;
    const allData = this.state.researchData;
    if (buttonName === 'latest') {
      this.setState({ numDecks: 1, latestStyle: on, recentStyle: off, allStyle: off });
    } else
      if (buttonName === 'recent') {
        this.setState({ numDecks: 2, latestStyle: off, recentStyle: on, allStyle: off });
      } else
        if (buttonName === 'all') {
          this.setState({ numDecks: Math.trunc(allData.length / 3), latestStyle: off, recentStyle: off, allStyle: on });
        }
  }

  renderDecks() {
    const decks = [];
    for (let i = 0; i < this.state.numDecks; i++) {
      decks.push(this.renderDeck(i));
    }
    return (
      <div>
        <Row className="justify-content-center">
          <Button onClick={() => this.onClick('latest')} style={this.state.latestStyle}>Latest</Button>
          <Button onClick={() => this.onClick('all')} style={this.state.allStyle}>All
            ({this.state.researchData.length})</Button>
        </Row>
        {decks}
      </div>
    );
  }

  renderDeck(deckNum) {
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

  renderOneCard(project) {
    const cardData = this.state.researchData.find((data) => data.project === project);
    return this.renderResearchCard(cardData, 1);
  }

  render() {
    return (
      // eslint-disable-next-line react/prop-types
      <div style={this.props.sectionStyle} id="home">
        <Container>
          <Title title={'Research'}/>
          {this.state.showOneCard ? this.renderOneCard(this.state.showOneCard) : this.renderDecks()}
        </Container>
      </div>
    );
  }
}

export default Research;

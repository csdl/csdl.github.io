import React from 'react';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Title from './Title';
import getNewsData from './NewsData';
import NewsCard from './NewsCard';
import { greenColorCode } from './Constants';

class News extends React.Component {
  constructor(props) {
    super(props);
    const buttonStyle = { backgroundColor: greenColorCode, margin: '1em', borderColor: greenColorCode };
    const selectedStyle = { ...buttonStyle, fontWeight: 'bold' };
    const deselectedStyle = { ...buttonStyle, fontWeight: 'normal' };
    const newsData = getNewsData();
    const latestStyle = selectedStyle;
    const recentStyle = deselectedStyle;
    const allStyle = deselectedStyle;
    const numDecks = 1;
    this.state = { selectedStyle, deselectedStyle, newsData, numDecks, latestStyle, recentStyle, allStyle };
  }

  renderNewsCard(data, idx) {
    return <NewsCard key={idx} Date={data.Date} Headline={data.Headline} Text={data.Text} URL={data.URL}
                     Media={data.Media}/>;
  }

  onClick(buttonName) {
    const on = this.state.selectedStyle;
    const off = this.state.deselectedStyle;
    const allData = this.state.newsData;
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
    return decks;
  }

  renderDeck(deckNum) {
    const deckStyle = { marginBottom: '1em' };
    return (
      <CardDeck key={deckNum} style={deckStyle}>
        {[
          this.renderNewsCard(this.state.newsData[(deckNum * 3)], (deckNum * 3)),
          this.renderNewsCard(this.state.newsData[(deckNum * 3) + 1], (deckNum * 3) + 1),
          this.renderNewsCard(this.state.newsData[(deckNum * 3) + 2], (deckNum * 3) + 2),
        ]}
      </CardDeck>
    );
  }

  render() {
    const allLen = this.state.newsData.length;
    return (
      // eslint-disable-next-line react/prop-types
      <div style={this.props.sectionStyle} id="home">
        <Container>
          <Title title={'News'}/>
          <Row className="justify-content-center">
            <Button onClick={() => this.onClick('latest')} style={this.state.latestStyle}>Latest (3)</Button>
            <Button onClick={() => this.onClick('recent')} style={this.state.recentStyle}>Recent (6)</Button>
            <Button onClick={() => this.onClick('all')} style={this.state.allStyle}>All ({allLen})</Button>
          </Row>
          {this.renderDecks()}
        </Container>
      </div>
    );
  }
}

export default News;

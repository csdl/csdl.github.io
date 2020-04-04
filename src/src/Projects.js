import React from 'react';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Title from './Title';
import getProjectsData from './ProjectsData';
import ProjectsCard from './ProjectsCard';
import { greenColorCode } from './Constants';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    const buttonStyle = { backgroundColor: greenColorCode, margin: '1em', borderColor: greenColorCode };
    const selectedStyle = { ...buttonStyle, fontWeight: 'bold' };
    const deselectedStyle = { ...buttonStyle, fontWeight: 'normal' };
    const ProjectsData = getProjectsData();
    const latestStyle = selectedStyle;
    const recentStyle = deselectedStyle;
    const allStyle = deselectedStyle;
    const numDecks = 1;
    this.state = { selectedStyle, deselectedStyle, ProjectsData, numDecks, latestStyle, recentStyle, allStyle };
  }

  renderProjectsCard(data, idx) {
    return <ProjectsCard key={idx} Date={data.Date} Headline={data.Headline} Text={data.Text} URL={data.URL}
                     Media={data.Media}/>;
  }

  onClick(buttonName) {
    const on = this.state.selectedStyle;
    const off = this.state.deselectedStyle;
    const allData = this.state.ProjectsData;
    if (buttonName === 'latest') {
      this.setState({ numDecks: 1, latestStyle: on, recentStyle: off, allStyle: off });
    } else if (buttonName === 'recent') {
      this.setState({ numDecks: 2, latestStyle: off, recentStyle: on, allStyle: off });
    } else if (buttonName === 'all') {
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
          this.renderProjectsCard(this.state.ProjectsData[(deckNum * 3)], (deckNum * 3)),
          this.renderProjectsCard(this.state.ProjectsData[(deckNum * 3) + 1], (deckNum * 3) + 1),
          this.renderProjectsCard(this.state.ProjectsData[(deckNum * 3) + 2], (deckNum * 3) + 2),
        ]}
      </CardDeck>
    );
  }

  render() {
    return (
      // eslint-disable-next-line react/prop-types
      <div style={this.props.sectionStyle} id="home">
        <Container>
          <Title title={'Projects'}/>
          <Row className="justify-content-center">
            <Button onClick={() => this.onClick('latest')} style={this.state.latestStyle}>Latest</Button>
            <Button onClick={() => this.onClick('recent')} style={this.state.recentStyle}>Recent</Button>
            <Button onClick={() => this.onClick('all')} style={this.state.allStyle}>All</Button>
          </Row>
          <CardDeck>
            {this.renderDecks()}
          </CardDeck>
        </Container>
      </div>
    );
  }
}

export default Projects;

import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Title from './Title';
import { greenColorCode } from './Constants';
import trJson from './_data/csdl-trs.master.array.json';

class Papers extends React.Component {
  constructor(props) {
    super(props);
    const buttonStyle = { backgroundColor: greenColorCode, margin: '1em', borderColor: greenColorCode };
    const selectedStyle = { ...buttonStyle, fontWeight: 'bold' };
    const deselectedStyle = { ...buttonStyle, fontWeight: 'normal' };
    const TechReportLibraryData = [];
    const latestStyle = selectedStyle;
    const recentStyle = deselectedStyle;
    const allStyle = deselectedStyle;
    const numDecks = 1;
    const showOneCard = null;
    this.state = {
      selectedStyle,
      deselectedStyle,
      TechReportLibraryData,
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

  renderButtons() {
    return (
      <div>
        <Row className="justify-content-center">
          <Button onClick={() => this.onClick('latest')} style={this.state.latestStyle}>Latest</Button>
          <Button onClick={() => this.onClick('all')} style={this.state.allStyle}>All
            ({trJson.length})</Button>
        </Row>
      </div>
    );
  }

  onClick(buttonName) {
    const on = this.state.selectedStyle;
    const off = this.state.deselectedStyle;
    const allData = this.state.TechReportLibraryData;
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

  render() {
    return (
      // eslint-disable-next-line react/prop-types
      <div style={this.props.sectionStyle} id="home">
        <Container>
          <Title title={'Papers'}/>
          {this.renderButtons()}
        </Container>
      </div>
    );
  }
}

export default Papers;

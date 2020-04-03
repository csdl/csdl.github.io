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
    const selectedStyle = {...buttonStyle, fontWeight: 'bold'};
    const deselectedStyle = {...buttonStyle, fontWeight: 'normal'};
    const newsData = getNewsData();
    const displayedData = newsData.slice(0, 3);
    const latestStyle = selectedStyle;
    const recentStyle = deselectedStyle;
    const allStyle = deselectedStyle;
    this.state = { buttonStyle, selectedStyle, deselectedStyle, newsData, displayedData, latestStyle, recentStyle, allStyle };
  }

  renderNewsCard(data, idx) {
    return <NewsCard key={idx} Date={data.Date} Headline={data.Headline} Text={data.Text} URL={data.URL}
                     Media={data.Media}/>
  }

  onClick(buttonName) {
    const on = this.state.selectedStyle;
    const off = this.state.deselectedStyle;
    const latestData = this.state.newsData.slice(0,3);
    const recentData = this.state.newsData.slice(0,6);
    const allData = this.state.newsData;
    if (buttonName === 'latest') {
      this.setState( { displayedData: latestData, latestStyle: on, recentStyle: off, allStyle: off });
    } else if (buttonName === 'recent') {
      this.setState( { displayedData: recentData, latestStyle: off, recentStyle: on, allStyle: off });
    } else if (buttonName === 'all') {
      this.setState( { displayedData: allData, latestStyle: off, recentStyle: off, allStyle: on });
    }
  }

  render() {
    return (
      <div style={this.props.sectionStyle} id="home">
        <Container>
          <Title title={"News"}/>
          <Row className="justify-content-center">
            <Button onClick={()=>this.onClick("latest")} style={this.state.latestStyle}>Latest</Button>
            <Button onClick={()=>this.onClick("recent")} style={this.state.recentStyle}>Recent</Button>
            <Button onClick={()=>this.onClick("all")} style={this.state.allStyle}>All</Button>
          </Row>
          <CardDeck>
            {this.state.displayedData.map((data, idx) => this.renderNewsCard(data, idx))}
          </CardDeck>
        </Container>
      </div>
    );
  }
}

export default News;

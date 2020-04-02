import React from 'react';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Title from './Title';
import getNewsData from './NewsData';
import NewsCard from './NewsCard';
import { greenColorCode } from './Constants';

function renderNewsCard(data, idx) {
  return <NewsCard key={idx} Date={data.Date} Headline={data.Headline} Text={data.Text} URL={data.URL}
                   Media={data.Media}/>
}

function News(props) {
  const recent = getNewsData().slice(0, 3);
  const buttonStyle = { backgroundColor: greenColorCode, margin: '1em', fontWeight: 'bold', borderColor: greenColorCode };
  const buttonStyle2 = { backgroundColor: greenColorCode, margin: '1em', borderColor: greenColorCode };
  return (
    <div style={props.sectionStyle} id="home">
      <Container>
        <Title title={"News"}/>
        <Row className="justify-content-center">
          <Button style={buttonStyle}>Latest</Button>
          <Button style={buttonStyle2}>Recent</Button>
          <Button style={buttonStyle2}>All</Button>
        </Row>
        <CardDeck>
          {recent.map((data, idx) => renderNewsCard(data, idx))}
        </CardDeck>
      </Container>
    </div>
  );
}

export default News;

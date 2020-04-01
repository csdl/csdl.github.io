import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import CardColumns from 'react-bootstrap/CardColumns'
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'
import Title from './Title'
import getNewsCardsData from './NewsCardsData';
import NewsCard from './NewsCard';

function renderNewsCard(data, idx) {
  return <NewsCard key={idx} Date={data.Date} Headline={data.Headline} Text={data.Text} URL={data.URL} Media={data.Media}/>
}

function NewsCards(props) {
  const recent = getNewsCardsData().slice(0,3);
  return (
    <div style={props.sectionStyle} id="home">
      <Container>
        <Title title={"News"}/>
         <CardColumns>
          {recent.map((data, idx) => renderNewsCard(data, idx))}
         </CardColumns>
      </Container>
    </div>
  );
}

function NewsCards2(props) {
  return (
    <div style={props.sectionStyle} id="home">
      <Container>
        <Title title={"News"}/>
        <CardDeck>
          <Card style={{ width: '28rem' }}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title Card title Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card style={{ width: '9rem' }}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card style={{ width: '9rem' }}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card style={{ width: '9rem' }}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card style={{ width: '9rem' }}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </Container>
    </div>
  );
}

export default NewsCards;

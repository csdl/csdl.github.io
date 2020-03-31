import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container'
import Title from './Title'

function Home(props) {
  const jumbotronStyle = {backgroundColor: "#FFFFFF", padding: 0, marginBottom: 0};
  return (
    <div style={props.sectionStyle} id="home">
      <Jumbotron fluid style={jumbotronStyle}>
        <Container>
          <Title title={"Welcome to CSDL"}/>
          <p>
            The Collaborative Software Development Laboratory is led by Philip Johnson, a Professor in the Department of Information and Computer Sciences at the University of Hawaii.
          </p>
          <p>
            Established in 1991, the Collaborative Software Development Laboratory performs research, development, and technology transfer in disciplines including software engineering, sustainability, entrepreneurship, educational technology, renewable energy, and computer-supported cooperative work.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Home;

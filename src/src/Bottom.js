import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { greenColorCode } from './Constants';

function Bottom() {
  const bottomStyle = { backgroundColor: greenColorCode, color: 'white', fontWeight: 'bold', paddingTop: '20px', paddingBottom: '20px' };
  return (
    <div style={bottomStyle}>
        <Container>
          <Row className="justify-content-center">
          <p>Collaborative Software Development Laboratory<br/>
            Department of Information and Computer Sciences<br/>
            University of Hawaii at Manoa<br/>
            Honolulu, HI, USA<br/>
          </p>
          </Row>
        </Container>
    </div>
  );
}

export default Bottom;

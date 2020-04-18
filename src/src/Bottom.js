import React from 'react';
import Container from 'react-bootstrap/Container';
import { greenColorCode } from './Constants';

function Bottom() {
  const bottomStyle = { backgroundColor: greenColorCode, color: 'white', fontWeight: 'bold', marginTop: '20px' };
  return (
    <div style={bottomStyle}>
        <Container className="justify-content-center">
          <p>This is the footer.</p>
        </Container>
    </div>
  );
}

export default Bottom;

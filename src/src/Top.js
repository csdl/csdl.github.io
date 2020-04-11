import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { greenColorCode } from './Constants';

function Topp() {
  const navbarStyle = { backgroundColor: greenColorCode, color: 'white', fontWeight: 'bold' };
  return (
    <div>
      <Navbar style={navbarStyle}>
        <Container className="justify-content-center">
          <Nav>
            <Nav.Item><Nav.Link href="#home" style={navbarStyle}>Home</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="#news" style={navbarStyle}>News</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="#people" style={navbarStyle}>Research</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="#projects" style={navbarStyle}>Papers</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="#publications" style={navbarStyle}>People</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="#sponsors" style={navbarStyle}>Partners</Nav.Link></Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Topp;
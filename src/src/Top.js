import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { greenColorCode } from './Constants';

/**
 * Display the "NavBar" at the top of the page.
 */
function Top() {
  const navbarStyle = { backgroundColor: greenColorCode, color: 'white', fontWeight: 'bold' };
  return (
    <div>
      <Navbar style={navbarStyle}>
        <Container className="justify-content-center">
          <Nav>
            <Nav.Item><Nav.Link href="#news" style={navbarStyle}>News</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="#research" style={navbarStyle}>Research</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="#papers" style={navbarStyle}>Papers</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="#members" style={navbarStyle}>Members</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="#sponsors" style={navbarStyle}>Sponsors</Nav.Link></Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Top;

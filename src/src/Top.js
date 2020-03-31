import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function Topp(props) {
  const navbarStyle = { backgroundColor: "#376551", color: "white", fontWeight: "bold" }
  return (
    <div>
      <Navbar style={navbarStyle}>
        <Container>
          <Nav>
            <Nav.Item><Nav.Link href="#home" style={navbarStyle}>Home</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="#news" style={navbarStyle}>News</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="#people" style={navbarStyle}>People</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="#projects" style={navbarStyle}>Projects</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="#publications" style={navbarStyle}>Papers</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="#sponsors" style={navbarStyle}>Sponsors</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="#contact" style={navbarStyle}>Contact</Nav.Link></Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Topp;

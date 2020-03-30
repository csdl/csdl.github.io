import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Home from './Home';
import Timeline from './Timeline';

const sectionStyle = {marginTop: "1em", marginBottome: "1em"};
const borderStyle = {border: "0.5px solid black"}
ReactDOM.render(
  <React.StrictMode>
    <Home sectionStyle={sectionStyle}/>
    <hr style={borderStyle}/>
    <Timeline sectionStyle={sectionStyle}/>
  </React.StrictMode>,
  document.getElementById('root')
);

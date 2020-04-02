import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Home from './Home';
import Top from './Top';
import News from './News';
import { greenColorCode } from './Constants';

const sectionStyle = {marginTop: "1em", marginBottome: "1em"};
const borderStyle = {border: `0.5px solid ${greenColorCode}`};
ReactDOM.render(
  <React.StrictMode>
    <Top/>
    <Home sectionStyle={sectionStyle}/>
    <hr style={borderStyle}/>
    <News/>
  </React.StrictMode>,
  document.getElementById('root')
);

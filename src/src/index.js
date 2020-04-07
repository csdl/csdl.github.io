import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Home from './Home';
import Top from './Top';
import News from './News';
import Research from './Research';
import { lightGreenColorCode } from './Constants';

const sectionStyle = { paddingTop: '1em', paddingBottom: '1em' };
const sectionStyle2 = { ...sectionStyle, backgroundColor: lightGreenColorCode };
ReactDOM.render(
  <React.StrictMode>
    <Top/>
    <Home sectionStyle={sectionStyle}/>
    <News sectionStyle={sectionStyle2}/>
    <Research sectionStyle={sectionStyle}/>
  </React.StrictMode>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);

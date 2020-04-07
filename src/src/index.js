import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Home from './Home';
import Top from './Top';
import News from './News';
import Research from './Research';
import { greenColorCode } from './Constants';

const sectionStyle = { marginTop: '1em', marginBottome: '1em' };
ReactDOM.render(
  <React.StrictMode>
    <Top/>
    <Home sectionStyle={sectionStyle}/>
    <div style={{ backgroundColor: '#ecedeb', paddingBottom: '10px', paddingTop: '10px' }}>
      <News/>
    </div>
    <Research/>
  </React.StrictMode>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);

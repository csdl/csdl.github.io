import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Home from './Home';
import Top from './Top';
import Bottom from './Bottom';
import News from './News';
import Research from './Research';
import Papers from './Papers';
import Members from './Members';
import Sponsors from './Sponsors';
import { lightGreenColorCode } from './Constants';

const sectionStyle = { paddingTop: '1em', paddingBottom: '1em' };
const sectionStyle2 = { ...sectionStyle, backgroundColor: lightGreenColorCode };

/**
 * The top level layout for the site.
 */
ReactDOM.render(
  <React.StrictMode>
    <Top/>
    <Home sectionStyle={sectionStyle}/>
    <News sectionStyle={sectionStyle2}/>
    <Research sectionStyle={sectionStyle}/>
    <Papers sectionStyle={sectionStyle2}/>
    <Members sectionStyle={sectionStyle}/>
    <Sponsors sectionStyle={sectionStyle2}/>
    <Bottom/>

  </React.StrictMode>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);

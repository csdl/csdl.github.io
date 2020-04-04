import React from 'react';
import Container from 'react-bootstrap/Container';
import Iframe from 'react-iframe';
import './Timeline.css';
import Title from './Title';

function Timeline(props) {
  return (
    // eslint-disable-next-line react/prop-types
    <div style={props.sectionStyle} id="News">
      <Container>
        <Title title={'News'}/>
      <Iframe src="//cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=11CwAmM3HEcDle5-IHBYvuOP4uI9mT0OP7zw8W99wwwU&amp;font=Default&amp;lang=en&amp;start_at_end=true&amp;initial_zoom=2&amp;height=450"
              width="100%"
              height="450"
              id="timeline"
              frameBorder={0}
              allowFullScreen={true}
              className="tl-timeline"
              display="initial"
              position="relative"/>
      </Container>
    </div>
  );
}

export default Timeline;

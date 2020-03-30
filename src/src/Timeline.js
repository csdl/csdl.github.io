import React from 'react';
import Container from 'react-bootstrap/Container';
import Iframe from 'react-iframe';
import './Timeline.css';
import Title from './Title'


/**
 [iframe src='//cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=11CwAmM3HEcDle5-IHBYvuOP4uI9mT0OP7zw8W99wwwU&amp;font=Default&amp;lang=en&amp;start_at_end=true&amp;initial_zoom=2&amp;height=650' width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0']
 */

function Timeline(props) {
  return (
    <div style={props.sectionStyle}>
      <Container>
        <Title title={"Noteworthy Events"}/>
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

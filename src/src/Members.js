import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Title from './Title';
import SectionToggle from './SectionToggle';
import MemberCard from './MemberCard';
import getMemberData from './data/MemberData';

/**
 * Display the Member section.
 * By default, display only those members whose dates field has "current" as the second element.
 * Click or tap an image to display details about the member.
 */
function Members(props) {
  const [display, setDisplay] = useState('recent');
  const memberData = getMemberData();

  const onClickToggle = (pushedButton) => {
    if (pushedButton === 'recent') {
      setDisplay('recent');
    } else
      if (pushedButton === 'all') {
        setDisplay('all');
      }
  };

  const renderRecent = () => {
    const recentMembers = _.filter(memberData, (person) => person.dates[1] === 'present');
    return (
      <Container>
        <Row className="justify-content-center">
          {_.map(recentMembers, (person, idx) => <MemberCard key={idx} person={person}/>)}
        </Row>
      </Container>
    );
  };

  const renderAll = () => (
    <Container>
      <Row className="justify-content-center">
        {_.map(memberData, (person, idx) => <MemberCard key={idx} person={person}/>)}
      </Row>
    </Container>
  );

  return (
    <div style={props.sectionStyle} id="members">
      <Container>
        <Title title={'Members'}/>
        <SectionToggle onClick={onClickToggle} total={memberData.length} recentLabel='Current'/>
        <p style={{ textAlign: 'center' }}>Click (or tap) an image to display (or hide) member details.</p>
        {display === 'recent' ? renderRecent() : renderAll()}
      </Container>
    </div>
  );
}

Members.propTypes = {
  sectionStyle: PropTypes.object.isRequired,
};

export default Members;

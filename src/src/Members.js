import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Title from './Title';
import SectionButtons from './SectionButtons';
import MemberCard from './MemberCard';
import getMemberData from './data/MemberData';

class Members extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: 'recent' };
    this.memberData = getMemberData();
  }

  onClickSectionButton = (pushedButton) => {
    if (pushedButton === 'recent') {
      this.setState({ display: 'recent' });
    } else
      if (pushedButton === 'all') {
        this.setState({ display: 'all' });
      }
  }

  renderRecent = () => {
    const recentMembers = _.filter(this.memberData, (person) => person.dates[1] === 'present');
    return (
      <Container>
        <Row className="justify-content-center">
          {_.map(recentMembers, (person, idx) => <MemberCard key={idx} person={person}/>)}
        </Row>
      </Container>
    );
  }

  renderAll = () => (
    <Container>
      <Row className="justify-content-center">
        {_.map(this.memberData, (person, idx) => <MemberCard key={idx} person={person}/>)}
      </Row>
    </Container>
  )

  render = () => (
    <div style={this.props.sectionStyle} id="members">
      <Container>
        <Title title={'Members'}/>
        <SectionButtons onClick={this.onClickSectionButton} total={this.memberData.length} recentLabel='Current'/>
        <p style={{ textAlign: 'center' }}>Click (or tap) an image to display (or hide) member details.</p>
        {this.state.display === 'recent' ? this.renderRecent() : this.renderAll()}
      </Container>
    </div>
  );
}

Members.propTypes = {
  sectionStyle: PropTypes.object.isRequired,
};

export default Members;

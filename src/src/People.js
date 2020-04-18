import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Title from './Title';
import SectionButtons from './SectionButtons';
import PeopleCard from './PeopleCard';
import getPeopleData from './data/PeopleData';

class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: 'recent' };
    this.peopleData = getPeopleData();
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
    const recentPeople = _.filter(this.peopleData, (person) => person.dates[1] === 'present');
    return (
      <Container>
        <Row className="justify-content-center">
          {_.map(recentPeople, person => <PeopleCard person={person}/>)}
        </Row>
      </Container>
    );
  }

  renderAll = () => (
    <Container>
      <Row className="justify-content-center">
        {_.map(this.peopleData, person => <PeopleCard person={person}/>)}
      </Row>
    </Container>
  )

  render = () => (
    <div style={this.props.sectionStyle} id="people">
      <Container>
        <Title title={'People'}/>
        <SectionButtons onClick={this.onClickSectionButton} total={this.peopleData.length} recentLabel='Current'/>
        {this.state.display === 'recent' ? this.renderRecent() : this.renderAll()}
      </Container>
    </div>
  );
}

People.propTypes = {
  sectionStyle: PropTypes.object.isRequired,
};

export default People;

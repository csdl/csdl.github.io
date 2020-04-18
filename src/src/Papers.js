import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Container from 'react-bootstrap/Container';
import Title from './Title';
import TechReports from './TechReports';
import SectionButtons from './SectionButtons';
import PaperCard from './PaperCard';
import PaperForm from './PaperForm';

class Papers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: 'recent' };
    this.techreports = new TechReports();
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
    const keys = this.techreports.getRecentKeys();
    return (
      <div>
        <p style={{ textAlign: 'center' }}>Click (or tap) an entry to display (or hide) the abstract.</p>
        {_.map(keys, (key, idx) => <PaperCard key={idx} entry={this.techreports.getEntry(key)}/>)}
      </div>
    );
  }

  render = () => (
    <div style={this.props.sectionStyle} id="papers">
      <Container>
        <Title title={'Papers'}/>
        <SectionButtons onClick={this.onClickSectionButton} total={this.techreports.total()}/>
        {this.state.display === 'recent' ? this.renderRecent() : <PaperForm/>}
      </Container>
    </div>
  );
}

Papers.propTypes = {
  sectionStyle: PropTypes.object.isRequired,
};

export default Papers;

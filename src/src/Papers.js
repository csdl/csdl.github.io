import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Container from 'react-bootstrap/Container';
import Markdown from 'react-markdown';
import Title from './Title';
import TechReports from './TechReports';
import SectionButtons from './SectionButtons';
import PaperCard from './PaperCard';

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

  formatTechReport = entry => {
    const abstractLabel = entry.abstract ? 'Abstract' : 'Summary';
    const abstractText = entry.abstract || entry.summary;
    return `${entry.authors.join(', ')},  **${entry.title}**, Technical Report ${entry.number}, ${entry.month} ${entry.year}, ${entry.institution} \n\n ${abstractLabel}: ${abstractText}`;
  }

  renderPaper = (key, idx) => {
    const entry = this.techreports.getEntry(key);
    if (entry.type === 'techreport') {
      return (
        <PaperCard key={idx} entry={entry}/>
      );
    }
    return (
      <Markdown key={idx} source={`No techreport entry for key ${key}`}/>
    );
  }

  render = () => (
    <div style={this.props.sectionStyle} id="home">
      <Container>
        <Title title={'Papers'}/>
        <SectionButtons onClick={this.onClickSectionButton} total={this.techreports.total()}/>
        <p style={{ textAlign: 'center' }}>Click an entry to toggle view of abstract.</p>
        {_.map(this.techreports.getKeys('techreport'), (key, idx) => this.renderPaper(key, idx))}
      </Container>
    </div>
  );
}

Papers.propTypes = {
  sectionStyle: PropTypes.object.isRequired,
};

export default Papers;

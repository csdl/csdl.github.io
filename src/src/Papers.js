import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Title from './Title';
import paperData from './data/PaperData';
import SectionButtons from './SectionButtons';

class Papers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: 'recent' };
  }

  onClickSectionButton = (pushedButton) => {
    if (pushedButton === 'recent') {
      this.setState({ display: 'recent' });
    } else
      if (pushedButton === 'all') {
        this.setState({ display: 'all' });
      }
  }

  render = () => (
    <div style={this.props.sectionStyle} id="home">
      <Container>
        <Title title={'Papers'}/>
        <SectionButtons onClick={this.onClickSectionButton} total={paperData.length}/>
      </Container>
    </div>
  );
}

Papers.propTypes = {
  sectionStyle: PropTypes.object.isRequired,
};

export default Papers;

import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import { greenColorCode, lightGreenColorCode } from './Constants';

class SectionButtons extends React.Component {
  constructor(props) {
    super(props);
    const buttonStyle = { borderColor: greenColorCode };
    this.selectedStyle = { ...buttonStyle, fontWeight: 'bold', backgroundColor: greenColorCode };
    this.deselectedStyle = { ...buttonStyle, fontWeight: 'normal', color: greenColorCode, backgroundColor: lightGreenColorCode };
    this.state = { recentStyle: this.selectedStyle, allStyle: this.deselectedStyle };
    this.recentLabel = props.recentLabel || 'Recent';
  }

  onClick = (buttonName) => {
    if (buttonName === 'recent') {
      this.setState({ recentStyle: this.selectedStyle, allStyle: this.deselectedStyle });
      this.props.onClick('recent');
    } else
      if (buttonName === 'all') {
        this.setState({ recentStyle: this.deselectedStyle, allStyle: this.selectedStyle });
        this.props.onClick('all');
      }
  }

  render = () => (
    <Row style={{ marginBottom: '1em' }} className="justify-content-center">
      <ButtonGroup aria-label="Basic example">
      <Button onClick={() => this.onClick('recent')} style={this.state.recentStyle}>{this.recentLabel}</Button>
      <Button onClick={() => this.onClick('all')} style={this.state.allStyle}>All ({this.props.total})</Button>
      </ButtonGroup>
    </Row>
  );
}

SectionButtons.propTypes = {
  onClick: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  recentLabel: PropTypes.string,
};

export default SectionButtons;

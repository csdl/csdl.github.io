import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import { greenColorCode } from './Constants';

class SectionButtons extends React.Component {
  constructor(props) {
    super(props);
    const buttonStyle = { backgroundColor: greenColorCode, margin: '1em', borderColor: greenColorCode };
    this.selectedStyle = { ...buttonStyle, fontWeight: 'bold' };
    this.deselectedStyle = { ...buttonStyle, fontWeight: 'normal' };
    this.total = this.props.total;
    this.state = {
      recentStyle: this.selectedStyle,
      allStyle: this.deselectedStyle,
    };
  }

  onClick = (buttonName) => {
    const selectedStyle = this.selectedStyle;
    const deselectedStyle = this.deselectedStyle;
    if (buttonName === 'recent') {
      this.setState({ recentStyle: selectedStyle, allStyle: deselectedStyle });
      this.props.onClick('recent');
    } else
      if (buttonName === 'all') {
        this.setState({ recentStyle: this.deselectedStyle, allStyle: this.selectedStyle });
        this.props.onClick('all');
      }
  }

  render = () => {
    return (
      <Row className="justify-content-center">
        <Button onClick={() => this.onClick('recent')} style={this.state.recentStyle}>Recent</Button>
        <Button onClick={() => this.onClick('all')} style={this.state.allStyle}>All ({this.total})</Button>
      </Row>
    );
  }
}

SectionButtons.propTypes = {
  onClick: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

export default SectionButtons;

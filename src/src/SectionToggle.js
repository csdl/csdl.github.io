import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import { greenColorCode, lightGreenColorCode } from './Constants';

function SectionToggle(props) {
  const recentLabel = props.recentLabel || 'Recent';
  const buttonStyle = { borderColor: greenColorCode };
  const selectedStyle = { ...buttonStyle, fontWeight: 'bold', backgroundColor: greenColorCode };
  const deselectedStyle = {
    ...buttonStyle,
    fontWeight: 'normal',
    color: greenColorCode,
    backgroundColor: lightGreenColorCode,
  };
  const [recentStyle, setRecentStyle] =
    useState((props.toggleSetting === 'all') ? deselectedStyle : selectedStyle);
  const [allStyle, setAllStyle] =
    useState((props.toggleSetting === 'all') ? selectedStyle : deselectedStyle);
  // if (props.toggleSetting === 'all') {
  //   setRecentStyle(deselectedStyle);
  //   setAllStyle(selectedStyle);
  // }

  const onClick = (buttonName) => {
    if (buttonName === 'recent') {
      setRecentStyle(selectedStyle);
      setAllStyle(deselectedStyle);
      props.onClick('recent');
    } else
      if (buttonName === 'all') {
        setRecentStyle(deselectedStyle);
        setAllStyle(selectedStyle);
        props.onClick('all');
      }
  };

  return (
    <Row style={{ marginBottom: '1em' }} className="justify-content-center">
      <ButtonGroup aria-label="Basic example">
        <Button onClick={() => onClick('recent')} style={recentStyle}>{recentLabel}</Button>
        <Button onClick={() => onClick('all')} style={allStyle}>All ({props.total})</Button>
      </ButtonGroup>
    </Row>
  );
}

SectionToggle.propTypes = {
  onClick: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  recentLabel: PropTypes.string,
  toggleSetting: PropTypes.string,
};

export default SectionToggle;

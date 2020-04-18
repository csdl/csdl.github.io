import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';

function PeopleCard(props) {
  return (
    <Image src={props.person.photo}/>
  );
}

PeopleCard.propTypes = {
  person: PropTypes.object.isRequired,
};

export default PeopleCard;

import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

function MemberCard(props) {
  const popover = (name, dates) => (
    <Popover id="popover-basic">
      <Popover.Title as="h3">{`${name[0]} ${name[1]}`}</Popover.Title>
      <Popover.Content>
        {`CSDL: ${dates[0]}`}{dates[1] && ` - ${dates[1]}`}
      </Popover.Content>
    </Popover>
  );
  const name = props.person.name;
  const dates = props.person.dates;

  return (
      <OverlayTrigger trigger="click" placement="top" overlay={popover(name, dates)}>
        <Image src={props.person.photo}/>
      </OverlayTrigger>
  );
}

MemberCard.propTypes = {
  person: PropTypes.object.isRequired,
};

export default MemberCard;

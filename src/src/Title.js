import React from 'react';

function Title(props) {
  const titleStyle = {fontWeight: 900, textAlign: "center"};
  return (
    <div>
      <h1 style={titleStyle}>{props.title}</h1>
    </div>
  );
}

export default Title;

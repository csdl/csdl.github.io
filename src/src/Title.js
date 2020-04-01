import React from 'react';

function Title(props) {
  const titleStyle = {fontWeight: 900, textAlign: "center", color: "#376551"};
  return (
    <div>
      <h1 style={titleStyle}>{props.title}</h1>
    </div>
  );
}

export default Title;
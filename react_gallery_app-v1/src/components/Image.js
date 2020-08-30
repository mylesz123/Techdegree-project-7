import React from 'react';
//<li> template for <Gallery /> component to accept props/data passed in.
const Image = (props) => {
  return(
    <li>
      <img src={props.url} alt={props.title} />
    </li>
  )
}

export default Image;

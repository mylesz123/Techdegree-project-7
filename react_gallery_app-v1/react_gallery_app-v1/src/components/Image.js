import React, { Component } from 'react';

const Image = (props) => {
    //<li> template for <Gallery /> component to accept whatever is passed in.
    return(
        <li>
            <img src={props.url} alt={props.title} />
        </li>
    )
}

export default Image;

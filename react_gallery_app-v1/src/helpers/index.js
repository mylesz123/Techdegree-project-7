import React from 'react';
import { apiKey } from '../config';

export const buildSearchUrl = (query) => {
    return `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
}

export const withData = (Component, onSearch) => {
    const StatefulComponent = ({
        match,
        location,
        history,
    }) => {
        return (
            <Component {...{ match, history, location, onSearch: onSearch }} />
        )
    }
    return StatefulComponent
}
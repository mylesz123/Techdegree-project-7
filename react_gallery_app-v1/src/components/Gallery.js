import React from 'react';
import NoResults from '../components/NoResults';
import Image from '../components/Image';

//stateless component, props passed in from App
const Gallery = ({ data }) => {
    return (
      <>
        {data 
          ? (
            <ul>
              {data.map(r => (
                <Image 
                  key={r.id}
                  url={`https://farm${r.farm}.staticflickr.com/${r.server}/${r.id}_${r.secret}.jpg`}
                  title={r.title} 
                />)
              )}
            </ul>
          )
          : (<NoResults />)
        }
      </>
    )
}

export default Gallery;

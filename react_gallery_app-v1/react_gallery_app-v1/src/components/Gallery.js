import React from 'react';
import NoResults from '../components/NoResults';
import Image from '../components/Image';

//stateless component, props passed in from App
const Gallery = (props) => {
  let result = props.data;
  //console.log(result);

  //return img if there are results, else show NoResults component
  if(result.length > 0) {
    let img = result.map(r =>
      <Image url={`https://farm${r.farm}.staticflickr.com/${r.server}/${r.id}_${r.secret}.jpg`} key={r.id} title={r.title} />)

      return (
        <ul>
          {img}
        </ul>
      )
  }
  else {
    return (
      <div>
        <NoResults /> //No Results component
      </div>
    )
  }
}

export default Gallery;

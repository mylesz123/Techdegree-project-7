import React from 'react';
import Image from '../components/Image';
import NoResults from '../components/NoResults';

//props passed from App
const Gallery = (props) => {

    let result = props.data;
    console.log(result);

    //if no results, show no results component, else return results inside ul
    if(result.length = 0) {
      return (
        <div>
          <NoResults /> //No Results component
        </div>
      )
    }
    else if(result.length > 0) {
      let img = result.map(r =>
        <Image url={`https://farm${r.farm}.staticflickr.com/${r.server}/${r.id}_${r.secret}.jpg`} key={r.id} title={r.title} />)

        return (
          <ul>
            {img}
          </ul>
        )
    }
}

export default Gallery;

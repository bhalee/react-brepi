import React, { useState } from 'react';

const BeerTile = (props) => {
  const [desc, setDesc] = useState(false);

  const click = () => {
      setDesc(!desc);
  };

  return (
    <div key={props.beer.id} id={`beer-${props.beer.id}`} className="beer-div">
      <div className="beer-img-div">      
        {desc ? <p>{props.beer.description}</p> : <img alt={props.beer.tagline} src={props.beer.image_url} className="beer-img"></img>}
      </div>
      <div onClick={() => click()} className="beer-name">
        <p>{props.beer.name}</p>
      </div>
    </div>
  )
};

export default BeerTile;

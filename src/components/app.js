import React, { useState, useEffect } from 'react';
import BeerTile from './beer-tile-func';
import { Pagination } from 'antd';
import 'antd/dist/antd.css';

const App = () => {
  const [linkPage, setLinkPage] = useState(1);
  const [beers, setBeers] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?page=${linkPage}&per_page=6`)
      .then((res) => res.json())
      .then((beersArray) => {
        setBeers(beersArray);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  },[linkPage]);

  return (
    <div>
    <div id="container">
     <header><h1>Company's name</h1></header> 
      <div id="beer-list">
        {loading ? ( <div>Loading...</div> ) : ( beers.map((beer) => { return <BeerTile key={beer.id} beer={beer} />; }))}
          <div></div>
      </div>
          <Pagination defaultPageSize={6} showSizeChanger={false} onChange={(page) => { setLinkPage(page); }} total={330} />
      </div>
    </div>
  );
};

export default App;

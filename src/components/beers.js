import React, {useState, useEffect}  from 'react'
import BeerTile from './beer-tile';

const BeerList = (props) => {
  const [linkPage, setLinkPage] = useState([props.page])
  const [beers, setBeers] = useState([])
  const [loading, setLoading] = useState([true])
  useEffect(()=>{
    fetch(`https://api.punkapi.com/v2/beers?page=${linkPage}&per_page=6`)
    .then(res => res.json())
    .then(beersArray => {
      setBeers(beersArray)
      setLoading(false)
    }).catch(err => {
      console.log(err);
    })
  })

return(
  <div id='beer-list'>
  {loading ? <div>Loading...</div> :  beers.map((beer) =>{
    return <BeerTile key={beer.id} beer={beer} />
  }
    
  )}
  </div>
)
  }

export default BeerList
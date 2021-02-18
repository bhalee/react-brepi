import React, { Component } from 'react';

class BeerTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: false,
    };
  }
  click() {
    console.log(this.state.desc);
    if(!this.state.desc){
      this.setState({
        desc: true,
      });
    } else {
      this.setState({
        desc: false,
      });
    }
  }
  render() {
    return this.state.desc ? (
      <div key={this.props.beer.id} id={`beer-${this.props.beer.id}`} className="beer-div">
        <div className="beer-img-div">
        <p>{this.props.beer.description}</p>
        </div>
        <div onClick={() => this.click()} className="beer-name">
          <p>{this.props.beer.name}</p>
        </div>
      </div>
      
    ) : (
      <div key={this.props.beer.id} id={`beer-${this.props.beer.id}`} className="beer-div">
        <div className="beer-img-div">
          <img alt={this.props.beer.tagline} src={this.props.beer.image_url} className="beer-img"></img>
        </div>
        <div onClick={() => this.click()} className="beer-name">
          <p>{this.props.beer.name}</p>
        </div>
      </div>
    );
  }
}

export default BeerTile;

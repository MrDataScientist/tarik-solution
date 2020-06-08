import React from 'react';

import axios from 'axios';

import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css"; 

export default class ItemList extends React.Component {
  state = {
    items: []
  }

  componentDidMount() {
    axios.get(`https://dev-new-compass.mifcom.de/testing/getconfigs`)
      .then(res => {
        const items = res.data;
        this.setState({ items });
      })
  }

  render() {
    let items = this.state.items
    console.log('items:', items)
    return (
      <Carousel autoPlay>
        { this.state.items.map(item =>
        item.items.map(item =>
          <div>
            <img alt={item.category} src={item.description} />
            <p className="legend">{item.category}</p>
          </div>
        )
          )}
      </Carousel>
    )
  }
}
import React from 'react';

import axios from 'axios';

import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css"; 

export default class ItemList2 extends React.Component {
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
   const items = this.state.items
   //console.log('items:', items)
    return (
<div>
        { items.map(item =>

        <div>
        <p>{item.name}</p>
        <img alt={item.name} src={item.imagePath} />
        <p>{item.price} €</p>

        { item.items.map(item =>
            <div>
            <p>{item.category}</p>
            <p >{item.description}</p>
            </div>
        )}
        </div>

          )}

      </div>
    )
  }
}
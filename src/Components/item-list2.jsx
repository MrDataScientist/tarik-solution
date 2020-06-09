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
          


          <table>
        <tr>
        <th></th>
        <th> {item.name} </th>
        </tr>

        <tr>
          <td></td>
          <td><img alt={item.name} src={item.imagePath} /></td>
        </tr>

        { item.items.map(item =>
              <tr><td>{item.category.toUpperCase()}</td>
              <td>{item.description}</td></tr>
        )}
      </table>




        <p>ab € {item.price},-</p>

        </div>

          )}

      </div>
    )
  }
}
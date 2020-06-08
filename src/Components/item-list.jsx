import React from 'react';

import axios from 'axios';

import './collection-items.scss';

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
    return (
      <ul>
        { this.state.items.map(item => 
       
        <li>
     
       <img src={item.imagePath} alt="imae test" />
          {item.name.toUpperCase()} : {item.description}</li>

        )}
      </ul>
    )
  }
}
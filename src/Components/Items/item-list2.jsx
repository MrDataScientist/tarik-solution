import React from 'react';
import axios from 'axios';

import { 
  BuyBtn,
  ItemTable,
  Price,
  Wrap,
  Image,
  Description
} from './style'

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

  handleOnClick = () => {
    console.log('TEST')
  }

  render() {
   const items = this.state.items

    return (
<div style={{display: 'flex'}}>
        { items.map(item =>
        <div> 
          
          <ItemTable>
        <tr>
        <th></th>
        <th> {item.name} </th>
        </tr>

        <tr>
          <td></td>
          <td><Image><img alt={item.name} src={item.imagePath} /></Image></td>
        </tr>




          { item.items.map(item =>
          <Description>
            {/* <td>{item.category}</td> */}
                  <td />
                  <td>{item.description}</td>
                  </Description>
          )}




      </ItemTable>
      <Price>ab € {item.price},-</Price>
      <ItemTable>
        <tr>
        <th></th>
        </tr>
      <tr>             
          <td><Wrap><BuyBtn onClick={this.handleOnClick}>Auswählen  ></BuyBtn></Wrap></td>
          </tr>
      </ItemTable>
        </div>
          )}
      </div>
    )
  }
}
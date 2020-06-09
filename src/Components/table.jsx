import React from "react";

import axios from 'axios';


class Table extends React.Component {
  state = {
    items: []
  };
  appendChild = () => {
    let { items } = this.state;
    items.push(items.length); // data.length is one more than actual length since array starts from 0.
    // Every time you call append row it adds new element to this array. 
    // You can also add objects here and use that to create row if you want.
    this.setState({items});
  };

  componentDidMount() {
    axios.get(`https://dev-new-compass.mifcom.de/testing/getconfigs`)
      .then(res => {
        const items = res.data;
        this.setState({ items });
      })
  }

  render() {
    return (
      <table>
        <thead>
          <th>Name of the Product:</th>
        </thead>
        <tbody>
          {this.state.items.map(id => (
            <Row id = {id} > {id}</Row>
          ))}
        </tbody>
      </table>
    );
  }
}

const Row = ({ id }) => (
  <tr>
    <td>
      {id}
    </td>
  </tr>
);

export default Table
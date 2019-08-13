import * as React from 'react';
import axios from 'axios';

export default class CartIconReact extends React.Component {
  componentDidMount = () => {
    axios.get("https://api.marcoreitano.dev/shoppingcarts")
    .then(response => {

      const newShoppingCart = response.data._embedded.shoppingCarts;

      const newState = Object.assign({}, this.state,
          {shoppingCarts: newShoppingCart});

      this.setState(newState);
    }).catch(error => console.log(error));
  };

  constructor(props) {
    super(props);
    this.state = {
      shoppingCarts: []
    };
  }

  render() {
    return (
        <div>
          <a href="/shoppingcart"></a>
          ICON {this.state.shoppingCarts.length}
        </div>
    );
  }
}

import * as React from 'react';
import axios from 'axios';

export default class CartIconReact extends React.Component {
  componentDidMount = () => {

    // Rest Call
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
          <style>
            @import
            "https://kit-free.fontawesome.com/releases/latest/css/free-v4-shims.min.css";
            @import
            "https://kit-free.fontawesome.com/releases/latest/css/free-v4-font-face.min.css";
            @import
            "https://kit-free.fontawesome.com/releases/latest/css/free.min.css";
          </style>
          <a href="/shoppingcart">
            <i class="fas fa-shopping-cart"></i>
          </a>
          ICON {this.state.shoppingCarts.length}
        </div>
    );
  }
}

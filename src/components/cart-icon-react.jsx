import * as React from 'react';
import ReactWebComponent from 'react-web-component';
import axios from 'axios';

export default class CartIconReact extends React.Component {
  componentDidMount = () => {

    // Rest Call
    console.log("Icon auth: " + keycloak.authenticated);

    if (keycloak.authenticated) {
      this.fetchShoppingCart();
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    };
  }

  fetchShoppingCart() {
    axios.get("https://api.marcoreitano.dev/shoppingcart",
        {headers: {'Authorization': "bearer " + keycloak.token}})
    .then(response => {

      const newCartItems = response.data.cartItems;

      const newState = Object.assign({}, this.state,
          {cartItems: newCartItems});

      this.setState(newState);
    }).catch(error => console.log(error));
  }

  render() {
    const badgecss = `
    .fa-stack[data-count]:after{
      position:absolute;
      right:0%;
      top:1%;
      content: attr(data-count);
      font-size:30%;
      padding:.6em;
      border-radius:999px;
      line-height:.75em;
      color: white;
      background:rgba(255,0,0,.85);
      text-align:center;
      min-width:2em;
      font-weight:bold;
    }
  `;
    return (
        <div>
          <style>
            @import
            "https://kit-free.fontawesome.com/releases/latest/css/free-v4-shims.min.css";
            @import
            "https://kit-free.fontawesome.com/releases/latest/css/free-v4-font-face.min.css";
            @import
            "https://kit-free.fontawesome.com/releases/latest/css/free.min.css";
            {badgecss}
          </style>
          <a className="fa-stack has-badge"
             href="/shoppingcart"
             data-count={this.state.cartItems.length}>
            <i class="fa fa-shopping-cart fa-stack-1x"></i>
          </a>
        </div>
    );
  }
}
ReactWebComponent.create(<CartIconReact/>, 'order-shoppingcart-icon');

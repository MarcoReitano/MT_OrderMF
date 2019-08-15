import * as React from 'react';
import axios from 'axios';
import ReactWebComponent from "react-web-component";

export default class CartViewReact extends React.Component {
  componentDidMount = () => {
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
      this.setState({shoppingCarts: response.data.cartItems});
    }).catch(error => console.log(error));
  }

  render() {
    return (
        <div>
          ShoppingcartView
          {this.state.shoppingCarts.map(function (shoppingCart) {
            return <div>{shoppingCart.id}</div>
          })}
        </div>
    );
  }
}
ReactWebComponent.create(<CartViewReact/>, 'cart-view');
